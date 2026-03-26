import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: "nexo <onboarding@resend.dev>", // poți schimba mai târziu
      to: "tellnex.contact@gmail.com",
      subject: `(NEXO SITE MESSAGE) ${subject || "New message"}`,
      html: `
        <div style="font-family: monospace; background:#0f1115; color:#e5e7eb; padding:20px;">
          <h2 style="color:#22c55e;">nexo.site message</h2>
          <p><strong>name:</strong> ${name}</p>
          <p><strong>email:</strong> ${email}</p>
          <p><strong>subject:</strong> ${subject || "-"}</p>
          <hr style="border-color:#22c55e33;" />
          <p style="white-space:pre-line;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}