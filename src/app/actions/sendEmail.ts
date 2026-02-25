"use server"

import { Resend} from 'resend';
import { contacData } from '@/data/contactData';

//Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

//Send Email
export async function sendEmail(formData: FormData) {
    //Get Data from Form
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    //Send Email
    try {
        await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: [contacData.email.user],
            replyTo: email as string,
            subject: `New message from ${name} (Portfolio)`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        return { success: true};
    } catch (error) {
        return { success: false, error};
    }
}