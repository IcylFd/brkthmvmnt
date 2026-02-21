/*
 * @Date: 2026-02-21 14:57:02
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-02-21 20:23:21
 */
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    await resend.emails.send({
      from: "movementalist@breakthemovement.com",
      to: "movementalist@breakthemovement.com",
      subject: "New Coaching Application",
      html: `
        <h2>New Application</h2>
        <p>from breakthemovement.com</p>
        <p>User email: ${email}</p>
      `,
    });

    //   await resend.emails.send({
    //   from: "Break The Movement <movementalist@breakthemovement.com>",
    //   to: email,
    //   subject: "Application Received – Break The Movement",
    //   html: `
    //     <div style="font-family: Arial, sans-serif; padding: 24px;">
    //       <h2 style="margin-bottom:16px;">We’ve received your application.</h2>

    //       <p>Thank you for applying for 1:1 coaching.</p>

    //       <p>
    //         Our team will review your submission and get back to you shortly.
    //       </p>

    //       <br/>

    //       <p style="font-weight:bold;">Break The Movement</p>
    //       <p style="color:gray;">© 2026</p>
    //     </div>
    //   `,
    // });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
