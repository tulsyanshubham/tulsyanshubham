import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(req: Request) {
    const { fname, lname, email, msg } = await req.json();
    console.log(fname, lname, email, msg)
    const name = `${fname} ${lname}`;
    const emailResponse = await sendVerificationEmail(name, email, msg);
    if (!emailResponse.success) {
        return Response.json(
            {
                success: false,
                message: "Failed to send message.",
            }, { status: 500 }
        );
    }
    return Response.json(
        {
            success: true,
            message: "Message sent successfully.",
        }, { status: 201 }
    );
}