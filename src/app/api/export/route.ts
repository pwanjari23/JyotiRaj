import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';

const exportSchema = z.object({
  contactName: z.string().min(1, 'Contact person name is required'),
  companyName: z.string().min(1, 'Company or brand name is required'),
  corporateEmail: z.string().email('Valid corporate email is required'),
  destinationCountry: z.string().min(1, 'Destination country is required'),
  targetPort: z.string().optional().default('Not specified'),
  shipmentVolume: z.string().optional().default('LCL (Less than Container Load)'),
  specialInquiries: z.string().optional().default(''),
});

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const validatedData = exportSchema.parse(rawBody);

    const {
      contactName,
      companyName,
      corporateEmail,
      destinationCountry,
      targetPort,
      shipmentVolume,
      specialInquiries,
    } = validatedData;

    const referenceId = `JR-EXP-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    // 1. Log to Supabase
    let dbSaved = false;
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from('customer_enquiries').insert({
          order_reference: referenceId,
          customer_name: contactName,
          customer_whatsapp: corporateEmail, // used as primary electronic contact
          customer_address: `${companyName}, Destination: ${destinationCountry} (Port: ${targetPort})`,
          customer_city: destinationCountry,
          payment_method: 'International Export Inquiry',
          items: [{ name: `Export Catalog & Quote: ${shipmentVolume}` }],
          subtotal: 0,
          shipping_fee: 0,
          total_estimated_rate: 0,
          status: 'pending',
        });

        if (dbError) {
          console.error('[Export API] Supabase Error:', dbError);
        } else {
          dbSaved = true;
        }
      } catch (err) {
        console.error('[Export API] Supabase Exception:', err);
      }
    }

    // 2. Format HTML Email
    const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8" /></head>
        <body style="margin: 0; padding: 24px 10px; background-color: #fff8ed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #39231b;">
          <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e6d5b9; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(67, 12, 10, 0.06);">
            
            <div style="background-color: #6b120f; padding: 24px; text-align: center; border-bottom: 3px solid #c9952e;">
              <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-family: Georgia, serif;">
                ✈️ NEW INTERNATIONAL EXPORT INQUIRY
              </h1>
              <div style="color: #e5be6c; font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 6px;">
                Jyotiraj Global Company &bull; Worldwide Sweets Export Division
              </div>
            </div>

            <div style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 18px; border-bottom: 1px dashed #e6d5b9; padding-bottom: 10px; font-size: 13px; color: #78675b;">
                <span>Reference: <strong style="color: #6b120f;">#${referenceId}</strong></span>
                <span>${formattedDate} IST</span>
              </div>

              <div style="background-color: #fff8ed; border: 1px solid #e6d5b9; border-radius: 10px; padding: 18px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #6b120f; text-transform: uppercase;">Corporate Buyer Information</h3>
                <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #78675b; width: 150px;">Contact Representative:</td>
                    <td style="padding: 4px 0; font-weight: 700; color: #39231b;">${contactName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Company / Organization:</td>
                    <td style="padding: 4px 0; font-weight: 700; color: #6b120f;">${companyName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Corporate Email:</td>
                    <td style="padding: 4px 0;"><a href="mailto:${corporateEmail}" style="color: #6b120f; font-weight: 600;">${corporateEmail}</a></td>
                  </tr>
                </table>
              </div>

              <div style="background-color: #ffffff; border: 1px solid #f1e3cc; border-radius: 10px; padding: 18px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #6b120f; text-transform: uppercase;">Export Shipment Logistics</h3>
                <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 0; color: #78675b; width: 150px;">Destination Country:</td>
                    <td style="padding: 4px 0; font-weight: 700; color: #39231b;">🌍 ${destinationCountry}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Target Port / Airport:</td>
                    <td style="padding: 4px 0; color: #39231b;">${targetPort || 'To be determined'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 0; color: #78675b;">Estimated Shipment Volume:</td>
                    <td style="padding: 4px 0; color: #6b120f; font-weight: 700;">${shipmentVolume}</td>
                  </tr>
                  ${specialInquiries ? `
                  <tr>
                    <td style="padding: 6px 0 0 0; color: #78675b; vertical-align: top;">Special Requirements:</td>
                    <td style="padding: 6px 0 0 0; color: #39231b;">${specialInquiries}</td>
                  </tr>` : ''}
                </table>
              </div>

              <div style="text-align: center; margin: 24px 0 10px 0;">
                <a href="mailto:${corporateEmail}?subject=${encodeURIComponent(`Re: Jyotiraj Global Export Inquiry #${referenceId}`)}"
                   style="display: inline-block; background-color: #6b120f; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 9999px; font-weight: 700; font-size: 14px;">
                  ✉️ Reply to Buyer via Email
                </a>
              </div>
            </div>

            <div style="background-color: #fff8ed; padding: 14px; text-align: center; font-size: 11px; color: #78675b; border-top: 1px solid #e6d5b9;">
              Jyotiraj Global Company &bull; International Export Division (FSSAI, APEDA & Export Compliant)
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
          subject: `✈️ International Export Request #${referenceId} - ${companyName} (${destinationCountry})`,
          html: emailHtml,
        });

        if (emailError) {
          console.error('[Export API] Resend Error:', emailError);
        } else {
          emailSent = true;
          emailId = emailData?.id;
        }
      } catch (err) {
        console.error('[Export API] Resend Exception:', err);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      message: 'Export catalog request received. Our export division will send the comprehensive catalog & pricing.',
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
    console.error('[Export API] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
