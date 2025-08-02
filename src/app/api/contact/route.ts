import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // 環境変数のチェック
    if (!process.env.EMAIL_ADDRESS) {
      throw new Error("メール送信の設定が正しくありません");
    }

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // メールの内容
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `ポートフォリオからのお問い合わせ: ${name} 様より`,
      text: `
名前: ${name}
メールアドレス: ${email}
会社名: ${company || "未入力"}

メッセージ:
${message}
      `,
      replyTo: email,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "メッセージが正常に送信されました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メッセージの送信に失敗しました" },
      { status: 500 }
    );
  }
}
