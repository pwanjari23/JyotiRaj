import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'vite-api-handler',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            // Handle /api/quote
            if (req.url?.startsWith('/api/quote') && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });

              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const { items, subtotal, shippingFee, grandTotal, customerDetails } = data;

                  const orderReference = `JR-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

                  // 1. Supabase logging
                  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
                  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
                  if (supabaseUrl && supabaseKey) {
                    try {
                      const supabase = createClient(supabaseUrl, supabaseKey);
                      await supabase.from('customer_enquiries').insert({
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
                    } catch (err) {
                      console.error('[Vite Server] Supabase Error:', err);
                    }
                  }

                  // 2. Resend Email
                  const resendApiKey = env.RESEND_API_KEY;
                  if (resendApiKey) {
                    try {
                      const resend = new Resend(resendApiKey);
                      const recipient = env.BUSINESS_NOTIFICATION_EMAIL || 'orders@jyotirajglobal.com';
                      const from = env.RESEND_FROM_EMAIL || 'Jyotiraj Orders <onboarding@resend.dev>';

                      await resend.emails.send({
                        from,
                        to: recipient,
                        subject: `New Order #${orderReference} - ${customerDetails.name} (₹${grandTotal})`,
                        html: `
                          <h2>New Jyotiraj Order #${orderReference}</h2>
                          <p><strong>Customer:</strong> ${customerDetails.name} (${customerDetails.phone})</p>
                          <p><strong>Address:</strong> ${customerDetails.address}, ${customerDetails.city} - ${customerDetails.pincode}</p>
                          <p><strong>Total:</strong> ₹${grandTotal}</p>
                        `,
                      });
                    } catch (err) {
                      console.error('[Vite Server] Resend Error:', err);
                    }
                  } else {
                    console.log(`[Vite Server] Order #${orderReference} received (RESEND_API_KEY not configured yet).`);
                  }

                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      success: true,
                      orderReference,
                      message: 'Order received successfully',
                    })
                  );
                } catch (err) {
                  console.error('[Vite Server] Request Error:', err);
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: 'Invalid order payload' }));
                }
              });
              return;
            }

            // Handle /api/wholesale
            if (req.url?.startsWith('/api/wholesale') && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const referenceId = `JR-WS-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

                  const resendApiKey = env.RESEND_API_KEY;
                  if (resendApiKey) {
                    try {
                      const resend = new Resend(resendApiKey);
                      const recipient = env.BUSINESS_NOTIFICATION_EMAIL || 'orders@jyotirajglobal.com';
                      const from = env.RESEND_FROM_EMAIL || 'Jyotiraj Orders <onboarding@resend.dev>';
                      await resend.emails.send({
                        from,
                        to: recipient,
                        subject: `🏢 Wholesale Request #${referenceId} - ${data.companyName || data.fullName}`,
                        html: `<h2>New Wholesale Inquiry #${referenceId}</h2><p><strong>Name:</strong> ${data.fullName}</p><p><strong>Company:</strong> ${data.companyName}</p><p><strong>Email:</strong> ${data.businessEmail}</p><p><strong>Phone:</strong> ${data.phoneNumber}</p><p><strong>Quantity:</strong> ${data.estimatedQty}</p>`,
                      });
                    } catch (err) {
                      console.error('[Vite Server] Resend Wholesale Error:', err);
                    }
                  }

                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, referenceId, message: 'Wholesale request received' }));
                } catch {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
                }
              });
              return;
            }

            // Handle /api/export
            if (req.url?.startsWith('/api/export') && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body);
                  const referenceId = `JR-EXP-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

                  const resendApiKey = env.RESEND_API_KEY;
                  if (resendApiKey) {
                    try {
                      const resend = new Resend(resendApiKey);
                      const recipient = env.BUSINESS_NOTIFICATION_EMAIL || 'orders@jyotirajglobal.com';
                      const from = env.RESEND_FROM_EMAIL || 'Jyotiraj Orders <onboarding@resend.dev>';
                      await resend.emails.send({
                        from,
                        to: recipient,
                        subject: `✈️ Export Inquiry #${referenceId} - ${data.companyName} (${data.destinationCountry})`,
                        html: `<h2>New Export Request #${referenceId}</h2><p><strong>Representative:</strong> ${data.contactName}</p><p><strong>Company:</strong> ${data.companyName}</p><p><strong>Email:</strong> ${data.corporateEmail}</p><p><strong>Country:</strong> ${data.destinationCountry}</p><p><strong>Volume:</strong> ${data.shipmentVolume}</p>`,
                      });
                    } catch (err) {
                      console.error('[Vite Server] Resend Export Error:', err);
                    }
                  }

                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, referenceId, message: 'Export catalog request received' }));
                } catch {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: 'Invalid payload' }));
                }
              });
              return;
            }

            // Handle /api/quote GET
            if (req.url?.startsWith('/api/quote') && req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ status: 'online', endpoint: '/api/quote' }));
              return;
            }

            next();
          });
        },
      },
    ],
  };
});
