import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    // Validate the data
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using custom domain
    const { data: emailData, error } = await resend.emails.send({
      from: 'Eesha Travels <booking@bookings.masot.online>', // Custom domain
      to: process.env.EMAIL_TO!,
      subject: `New Contact Inquiry from ${name} - ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">🌟 New Contact Message</h1>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="margin-top: 0; color: #333;">Customer Details:</h2>
              <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong>📞 Phone:</strong> ${phone}</p>
            </div>

            <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
              <h3 style="margin-top: 0; color: #007bff;">💬 Message:</h3>
              <p style="margin: 0; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>This message was sent from your Eesha Travels website contact form.</p>
            <p>Reply to: <a href="mailto:booking@bookings.masot.online" style="color: #007bff;">booking@bookings.masot.online</a></p>
            <p>Call directly: <a href="tel:${phone}" style="color: #007bff;">${phone}</a></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Contact message sent successfully',
      emailId: emailData?.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}