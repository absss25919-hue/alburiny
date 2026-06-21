import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email to company
    const response = await resend.emails.send({
      from: 'support@alburiny.ae',
      to: 'info@alburiny.ae',
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Inquiry Received</h2>
          <p style="font-size: 16px; color: #666;">
            You have received a new inquiry from the contact form.
          </p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #555;">${message}</p>
          </div>

          <p style="color: #999; font-size: 12px;">
            This is an automated message from your website's contact form.
          </p>
        </div>
      `,
    });

    if (response.error) {
      console.error('Resend error sending to company:', response.error);
      throw response.error;
    }

    // Send confirmation email to user
    try {
      await resend.emails.send({
        from: 'support@alburiny.ae',
        to: email,
        subject: 'We received your inquiry - Al Buriny',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #ff6b00;">Thank You, ${name}!</h2>
            <p style="font-size: 16px; color: #666;">
              We have received your inquiry and will get back to you shortly.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your Inquiry Details:</strong></p>
              <p>${message}</p>
            </div>

            <p style="color: #666;">
              <strong>Al Buriny Security Systems and Safety</strong><br>
              Al Ain & Abu Dhabi, UAE<br>
              Email: info@alburiny.ae
            </p>
          </div>
        `,
      });
    } catch (confirmError) {
      console.warn('Could not send confirmation email to user:', confirmError);
      // Don't fail the whole request if confirmation email fails
    }

    res.status(200).json({ success: true, messageId: response.data.id });
  } catch (error) {
    console.error('Email API Error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to send email',
      details: error.details || null
    });
  }
}
