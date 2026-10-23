import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const wholesaleSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  companyName: z.string().optional().default('Individual / Retailer'),
  businessEmail: z.string().email('Valid business email is required'),
  phoneNumber: z.string().min(8, 'Valid phone / WhatsApp number is required'),
  country: z.string().optional().default('India'),
  businessType: z.string().optional().default('Retail / Gifting'),
  estimatedQty: z.string().optional().default('Not specified'),
  preferredPackaging: z.string().optional().default('Standard'),
  requirements: z.string().optional().default(''),
  productsOfInterest: z.array(z.string()).default([]),
});

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const validatedData = wholesaleSchema.parse(rawBody);

    const {
      fullName,
      companyName,
      businessEmail,
      phoneNumber,
      country,
      businessType,
      estimatedQty,
      preferredPackaging,
      requirements,
      productsOfInterest,
    } = validatedData;

    const referenceId = `JR-WS-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    // 1. Log to Supabase
    let dbSaved = false;
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from('customer_enquiries').insert({
          order_reference: referenceId,
          customer_name: fullName,
          customer_whatsapp: phoneNumber,
          customer_address: `${companyName ? companyName + ', ' : ''}${country}`,
          customer_city: country,
          payment_method: 'Wholesale B2B Inquiry',
          items: productsOfInterest.map((p) => ({ name: p })),
          subtotal: 0,
          shipping_fee: 0,
          total_estimated_rate: 0,
          status: 'pending',
        });

        if (dbError) {
          console.error('[Wholesale API] Supabase Error:', dbError);
        } else {
          dbSaved = true;
        }
      } catch (err) {
        console.error('[Wholesale API] Supabase Exception:', err);
      }
    }

    // 2. Format HTML Email
    const productsHtml =
      productsOfInterest.length > 0
        ? productsOfInterest.map((p) => `<li style="padding: 4px 0; color: #39231b;">${p}</li>`).join('')
        : '<li style="color: #78675b;">All Sweets / General Inquiry</li>';

    const whatsappDigits = phoneNumber.replace(/\D/g, '');
    const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8" /></head>
        <body style="margin: 0; padding: 24px 10px; background-color: #fff8ed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #39231b;">
          <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e6d5b9; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(67, 12, 10, 0.06);">
            
            <div style="background-color: #6b120f; padding: 24px; text-align: center; border-bottom: 3px solid #c9952e;">
              <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-family: Georgia, serif;">
                🏢 NEW WHOLESALE / B2B REQUEST
              </h1>
              <div style="color: #e5be6c; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 6px;">
                Jyotiraj Global Company &bull; Bulk Sweets Supply
              </div>
            </div>

            <div style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 18px; border-bottom: 1px dashed #e6d5b9; padding-bottom: 10px; font-size: 13px; color: #78675b;">
                <span>Reference: <strong style="color: #6b120f;">#${referenceId}</strong></span>
                <span>${formattedDate} IST</span>
              </div>

              <div style="background-color: #fff8ed; border: 1px solid #e6d5b9; border-radius: 10px; padding: 18px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #6b120f; text-transform: uppercase;">Business Contact Details</h3>
                <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #78675b; width: 140px;">Contact Person:</td>
                    <td style="padding: 4px 0; font-weight: 700; color: #39231b;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Company / Brand:</td>
                    <td style="padding: 4px 0; font-weight: 600; color: #39231b;">${companyName || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Business Email:</td>
                    <td style="padding: 4px 0;"><a href="mailto:${businessEmail}" style="color: #6b120f; font-weight: 600;">${businessEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Phone / WhatsApp:</td>
                    <td style="padding: 4px 0;">
                      <a href="https://wa.me/${whatsappDigits}" style="color: #18552e; font-weight: 700; text-decoration: none;">
                        📱 ${phoneNumber} (Chat on WhatsApp)
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Country / Region:</td>
                    <td style="padding: 4px 0; color: #39231b;">${country}</td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #ffffff; border: 1px solid #f1e3cc; border-radius: 10px; padding: 18px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #6b120f; text-transform: uppercase;">Order Specifications</h3>
                <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #78675b; width: 140px;">Business Type:</td>
                    <td style="padding: 4px 0; color: #39231b; font-weight: 600;">${businessType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Estimated Quantity:</td>
                    <td style="padding: 4px 0; color: #6b120f; font-weight: 700;">${estimatedQty}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Packaging Format:</td>
                    <td style="padding: 4px 0; color: #39231b;">${preferredPackaging}</td>
                  </tr>
                  ${requirements ? `
                  <tr>
                    <td style="padding: 6px 0 0 0; color: #78675b; vertical-align: top;">Requirements:</td>
                    <td style="padding: 6px 0 0 0; color: #39231b;">${requirements}</td>
                  </tr>` : ''}
                </table>
              </div>

              <h3 style="margin: 0 0 8px 0; font-size: 14px; color: #6b120f; text-transform: uppercase;">Products of Interest:</h3>
              <ul style="margin: 0 0 24px 0; padding-left: 20px; font-size: 13.5px;">
                ${productsHtml}
              </ul>

              <div style="text-align: center; margin: 20px 0 10px 0;">
                <a href="https://wa.me/${whatsappDigits}?text=${encodeURIComponent(`Hello ${fullName}, this is Jyotiraj Global Company regarding your wholesale inquiry #${referenceId}.`)}"
                   style="display: inline-block; background-color: #18552e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 14px;">
                  💬 Connect with Buyer on WhatsApp
                </a>
              </div>
            </div>

            <div style="background-color: #fff8ed; padding: 14px; text-align: center; font-size: 11px; color: #78675b; border-top: 1px solid #e6d5b9;">
              Jyotiraj Global Company &bull; B2B Wholesale & Institutional Supply
            </div>
          </div>
        </body>
      </html>
    `;

    // 3. Send Email via Resend
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
          subject: `🏢 New Wholesale Inquiry #${referenceId} - ${companyName || fullName} (${estimatedQty})`,
          html: emailHtml,
        });

        if (emailError) {
          console.error('[Wholesale API] Resend Error:', emailError);
        } else {
          emailSent = true;
          emailId = emailData?.id;
        }
      } catch (err) {
        console.error('[Wholesale API] Resend Exception:', err);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Wholesale inquiry received successfully. Our B2B manager will contact you within 24 hours.',
      details: {
        referenceId,
        emailSent,
        emailId,
        dbSaved,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || 'Invalid form data' },
        { status: 400 }
      );
    }
    console.error('[Wholesale API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
