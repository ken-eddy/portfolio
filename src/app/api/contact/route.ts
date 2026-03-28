import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();
        console.log(name)
        
        // Configure email transport
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail', // or your email service
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.GOOGLE_APP_PASSWORD,

        //     },
        // });
        
        const transporter = nodemailer.createTransport({
        service: "gmail", // Shortcut for Gmail's SMTP settings - see Well-Known Services
        auth: {
            type: "OAuth2",
            user: "kitavimuuo@gmail.com",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        },
        });
        // Email content
        const mailOptions = {
            from: `${email}`,
            to: 'kitavimuuo@gmail.com',
            subject: `Contact Form: ${subject}`,
            html: `
                <h3>New message from ${name}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };
        
        await transporter.sendMail(mailOptions);
        
        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}