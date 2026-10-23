import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

// Define strict Zod validation schema for Jyotiraj cart checkout / quote
const orderSchema = z.object({
  items: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().min(1, 'Product name is required'),
      packSize: z.string().default('500g'),
      quantity: z.number().int().positive('Quantity must be greater than 0'),
      unitPrice: z.number().nonnegative(),
      totalPrice: z.number().nonnegative(),
      image: z.string().optional(),
    })
  ).min(1, 'Your cart must contain at least 1 item'),
  subtotal: z.number().nonnegative(),
  shippingFee: z.number().nonnegative().default(0),
  grandTotal: z.number().positive('Total amount must be greater than 0'),
  customerDetails: z.object({
    name: z.string().min(1, 'Full name is required'),
    phone: z.string().min(8, 'Valid phone / WhatsApp number is required'),
    address: z.string().min(3, 'Delivery address is required'),
    city: z.string().min(1, 'City is required'),
    pincode: z.string().optional().default(''),
    paymentMethod: z.string().optional().default('Cash on Delivery (COD) / WhatsApp Confirmation'),
    notes: z.string().optional(),
  }),
});

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const validatedData = orderSchema.parse(rawBody);

    const { items, subtotal, shippingFee, grandTotal, customerDetails } = validatedData;

    // Generate unique Jyotiraj order reference
    const timestampPart = Date.now().toString(36).toUpperCase();
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    const orderReference = `JR-${timestampPart}-${randomPart}`;

    // 1. Log to Supabase Database (Non-blocking / Graceful fallback)
    let dbSaved = false;
    if (supabase) {
      try {
        const { error: dbError } = await supabase
          .from('customer_enquiries')
          .insert({
            order_reference: orderReference,
            customer_name: customerDetails.name,
            customer_whatsapp: customerDetails.phone,
            customer_address: customerDetails.address,
            customer_city: customerDetails.city,
            customer_pincode: customerDetails.pincode || null,
            payment_method: customerDetails.paymentMethod,
            items,
            subtotal,
            shipping_fee: shippingFee,
            total_estimated_rate: grandTotal,
            status: 'pending',
          });

        if (dbError) {
          console.error('[Supabase Error] Failed to log order:', dbError);
        } else {
          dbSaved = true;
        }
      } catch (err) {
        console.error('[Supabase Exception]:', err);
      }
    }

    // 2. Format Items HTML for Email
    const itemsHtml = items
      .map((item, index) => {
        return `
          <tr>
            <td style="padding: 12px 14px; border-bottom: 1px solid #f1e3cc; font-size: 14px; color: #39231b;">
              <strong style="color: #6b120f;">${index + 1}. ${item.name}</strong>
              <div style="font-size: 12px; color: #78675b; margin-top: 2px;">
                Pack: <strong>${item.packSize}</strong> &bull; Qty: <strong>${item.quantity}</strong>
              </div>
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #f1e3cc; font-size: 13px; color: #78675b; text-align: right; vertical-align: top;">
              ₹${item.unitPrice.toLocaleString('en-IN')}
            </td>
            <td style="padding: 12px 14px; border-bottom: 1px solid #f1e3cc; font-size: 14px; font-weight: 700; color: #6b120f; text-align: right; vertical-align: top;">
              ₹${item.totalPrice.toLocaleString('en-IN')}
            </td>
          </tr>
        `;
      })
      .join('');

    const whatsappDigits = customerDetails.phone.replace(/\D/g, '');
    const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 3. Branded Royal Jyotiraj Email Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style="margin: 0; padding: 24px 10px; background-color: #fff8ed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #39231b;">
          <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e6d5b9; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(67, 12, 10, 0.06);">
            
            <!-- Royal Header -->
            <div style="background-color: #6b120f; padding: 26px 24px; text-align: center; border-bottom: 3px solid #c9952e;">
              <h1 style="margin: 0; font-size: 24px; color: #ffffff; letter-spacing: 0.5px; font-family: Georgia, serif;">
                JYOTIRAJ GLOBAL COMPANY
              </h1>
              <div style="color: #e5be6c; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-top: 6px; font-weight: 600;">
                Traditional Sweets & Dry Fruits &bull; Gruh Udyog
              </div>
            </div>

            <!-- Body -->
            <div style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 18px; border-bottom: 1px dashed #e6d5b9; padding-bottom: 12px;">
                <span style="font-size: 13px; color: #78675b;">Order Ref: <strong style="color: #6b120f; font-size: 15px;">#${orderReference}</strong></span>
                <span style="font-size: 12px; color: #78675b;">${formattedDate} IST</span>
              </div>

              <!-- Customer Card -->
              <div style="background-color: #fff8ed; border: 1px solid #e6d5b9; border-radius: 10px; padding: 18px; margin-bottom: 22px;">
                <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #6b120f; text-transform: uppercase; letter-spacing: 0.5px;">
                  Customer & Delivery Details
                </h3>
                <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #78675b; width: 120px;">Name:</td>
                    <td style="padding: 4px 0; font-weight: 700; color: #39231b;">${customerDetails.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">WhatsApp / Phone:</td>
                    <td style="padding: 4px 0;">
                      <a href="https://wa.me/${whatsappDigits}" style="color: #18552e; font-weight: 700; text-decoration: none;">
                        📱 ${customerDetails.phone} (Chat on WhatsApp)
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b; vertical-align: top;">Address:</td>
                    <td style="padding: 4px 0; color: #39231b;">${customerDetails.address}, ${customerDetails.city} ${customerDetails.pincode ? `- ${customerDetails.pincode}` : ''}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Payment Mode:</td>
                    <td style="padding: 4px 0; color: #39231b; font-weight: 600;">${customerDetails.paymentMethod}</td>
                  </tr>
                </table>
              </div>

              <!-- Items Table -->
              <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #6b120f; text-transform: uppercase; letter-spacing: 0.5px;">
                Ordered Delights (${items.length} ${items.length === 1 ? 'item' : 'items'})
              </h3>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; background-color: #ffffff; border: 1px solid #f1e3cc; border-radius: 8px;">
                <thead>
                  <tr style="background-color: #f1e3cc; text-align: left;">
                    <th style="padding: 10px 14px; font-size: 12px; color: #39231b; text-transform: uppercase; letter-spacing: 0.5px;">Sweet & Pack</th>
                    <th style="padding: 10px 14px; font-size: 12px; color: #39231b; text-transform: uppercase; letter-spacing: 0.5px; text-align: right;">Unit Price</th>
                    <th style="padding: 10px 14px; font-size: 12px; color: #39231b; text-transform: uppercase; letter-spacing: 0.5px; text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>

              <!-- Totals -->
              <div style="background-color: #f1e3cc; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
                <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Subtotal:</td>
                    <td style="padding: 4px 0; text-align: right; font-weight: 600; color: #39231b;">₹${subtotal.toLocaleString('en-IN')}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Shipping:</td>
                    <td style="padding: 4px 0; text-align: right; font-weight: 600; color: ${shippingFee === 0 ? '#18552e' : '#39231b'};">
                      ${shippingFee === 0 ? 'FREE Pan-India Shipping' : `₹${shippingFee.toLocaleString('en-IN')}`}
                    </td>
                  </tr>
                  <tr style="border-top: 1px solid #e6d5b9;">
                    <td style="padding: 8px 0 0 0; font-size: 16px; font-weight: 800; color: #6b120f;">Grand Total:</td>
                    <td style="padding: 8px 0 0 0; text-align: right; font-size: 20px; font-weight: 800; color: #6b120f;">
                      ₹${grandTotal.toLocaleString('en-IN')}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Quick Action Button -->
              <div style="text-align: center; margin: 26px 0 10px 0;">
                <a href="https://wa.me/${whatsappDigits}?text=${encodeURIComponent(`Hello ${customerDetails.name}, regarding your Jyotiraj order #${orderReference} for ₹${grandTotal}: We are reviewing your order details.`)}"
                   style="display: inline-block; background-color: #18552e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 14px;">
                  💬 Contact Customer on WhatsApp
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #fff8ed; padding: 16px; text-align: center; font-size: 11.5px; color: #78675b; border-top: 1px solid #e6d5b9;">
              Jyotiraj Global Company &bull; Handcrafted Indian Dry Fruit Sweets Since 1951<br/>
              Maharashtra, India &bull; Retail, Wholesale & International Export
            </div>
          </div>
        </body>
      </html>
    `;

    // 4. Send Email via Resend
    let emailSent = false;
    let emailId: string | undefined;

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.BUSINESS_NOTIFICATION_EMAIL || 'orders@jyotirajglobal.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Jyotiraj Orders <onboarding@resend.dev>';

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const { data: emailData, error: emailError } = await resend.emails.send({
          from: fromEmail,
          to: recipientEmail,
          subject: `📦 New Jyotiraj Order #${orderReference} - ${customerDetails.name} (₹${grandTotal.toLocaleString('en-IN')})`,
          html: emailHtml,
        });

        if (emailError) {
          console.error('[Resend Error]:', emailError);
        } else {
          emailSent = true;
          emailId = emailData?.id;
        }
      } catch (err) {
        console.error('[Resend Exception]:', err);
      }
    } else {
      console.log('[Dev Notice] RESEND_API_KEY not configured. Order logged to console for testing.');
    }

    return NextResponse.json({
      success: true,
      orderReference,
      message: 'Your order request has been received. Our team will verify and dispatch soon.',
      details: {
        orderReference,
        dbSaved,
        emailSent,
        emailId,
        grandTotal,
        customerName: customerDetails.name,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: error.issues[0]?.message || 'Invalid order data provided.',
          issues: error.issues,
        },
        { status: 400 }
      );
    }

    console.error('API Error in /api/quote:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal Server Error',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    endpoint: '/api/quote',
    service: 'Jyotiraj Global Company - Cart & Quote Processing API',
    supabaseConnected: !!supabase,
    resendConfigured: !!process.env.RESEND_API_KEY,
  });
}
