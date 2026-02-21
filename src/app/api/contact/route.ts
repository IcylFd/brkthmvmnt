/*
 * @Date: 2026-02-21 14:57:02
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-02-21 14:57:20
 */
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    await resend.emails.send({
      from: "hello@breakthemovement.com",
      to: "hello@breakthemovement.com", // 你的接收邮箱
      subject: "New Coaching Application",
      html: `
        <h2>New Application</h2>
        <p>User email: ${email}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
