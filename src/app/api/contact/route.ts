import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: 'Name, message, and contact information (email or phone) are required.' },
        { status: 400 }
      );
    }

    const inquiryId = `JR-MSG-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. We will get back to you shortly.',
      inquiryId,
      data: {
        name,
        email,
        phone,
        subject: subject || 'General Inquiry',
        message,
        receivedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process contact inquiry.', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    endpoint: '/api/contact',
    description: 'Jyotiraj Global Company - Contact & Customer Support API',
  });
}
