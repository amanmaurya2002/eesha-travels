import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { format } from 'date-fns';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { fullName, phone, destination, travelDate, travelers } = await request.json();

    // Validate the data
    if (!fullName || !phone || !destination || !travelDate || !travelers) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the travel date
    const formattedDate = format(new Date(travelDate), 'EEEE, MMMM do, yyyy');

    // Send email using Resend's shared domain
    const { data: emailData, error } = await resend.emails.send({
      from: 'Eesha Travels <onboarding@resend.dev>', // Resend's shared domain
      to: process.env.EMAIL_TO!,
      subject: `🚀 New Booking Request: ${destination} - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%); padding: 25px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center; font-size: 28px;">🎯 New Booking Request!</h1>
            <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">Someone wants to book their dream trip!</p>
          </div>

          <div style="background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 12px 12px;">
            <!-- Trip Details Card -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
              <h2 style="margin: 0 0 15px 0; font-size: 24px;">✈️ Trip Details</h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="margin: 0; font-size: 18px; font-weight: bold;">📍 ${destination}</p>
                  <p style="margin: 5px 0 0 0; opacity: 0.9;">${formattedDate}</p>
                </div>
                <div style="text-align: right;">
                  <p style="margin: 0; font-size: 18px; font-weight: bold;">👥 ${travelers} Traveler${travelers > 1 ? 's' : ''}</p>
                  <p style="margin: 5px 0 0 0; opacity: 0.9;">Adventure awaits!</p>
                </div>
              </div>
            </div>

            <!-- Customer Information Card -->
            <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 25px; border-left: 5px solid #28a745;">
              <h3 style="margin: 0 0 15px 0; color: #333; font-size: 20px;">👤 Customer Information</h3>
              <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
                <div>
                  <p style="margin: 0;"><strong>Full Name:</strong> ${fullName}</p>
                  <p style="margin: 8px 0 0 0;"><strong>Phone:</strong> ${phone}</p>
                  <p style="margin: 8px 0 0 0;"><strong>Preferred Contact:</strong> Phone</p>
                </div>
              </div>
            </div>

            <!-- Quick Contact Button -->
            <div style="text-align: center; margin: 25px 0;">
              <a href="tel:${phone}" style="background: #28a745; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; display: inline-block;">
                📞 Call ${phone}
              </a>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px; background: #f8f9fa;">
            <p style="margin: 0;">This booking request was submitted through your Eesha Travels website.</p>
            <p style="margin: 5px 0 0 0;">Generated on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: 'Failed to send booking request' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Booking request sent successfully',
      emailId: emailData?.id
    });

  } catch (error) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}