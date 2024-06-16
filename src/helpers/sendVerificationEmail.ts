import { resend } from "@/lib/resend";
import SendEmail from "../../emails/SendEmail";

export async function sendVerificationEmail(name: string, email: string, msg: string) {
    try {
        const emailResponse = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "nodemailer3639@gmail.com",
            subject: 'Message from Portofolio Website',
            react: SendEmail({name, email, msg}),
        });
        console.log("Email response:", emailResponse);
        return {
            success: true,
            message: "Verification email sent successfully",
        };
    } catch (emailError) {
        console.error("Error sending verification email: ", emailError);
        return {
            success: false,
            message: "Error sending verification email",
        };
    }
}