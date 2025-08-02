import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // 環境変数のチェック
    if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Required environment variables are missing");
      return NextResponse.json(
        {
          error:
            "メール送信の設定が正しくありません。管理者に連絡してください。",
        },
        { status: 500 }
      );
    }

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // HTMLメールのテンプレート
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #f8f9fa;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .header h1 {
              color: #2c3e50;
              margin: 0;
              font-size: 24px;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e9ecef;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #2c3e50;
            }
            .value {
              margin-top: 5px;
            }
            .message-box {
              background-color: #f8f9fa;
              padding: 15px;
              border-radius: 6px;
              margin-top: 10px;
            }
            .footer {
              margin-top: 20px;
              font-size: 14px;
              color: #6c757d;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>ポートフォリオサイトからの問い合わせ</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">お名前</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">メールアドレス</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">会社名</div>
              <div class="value">${company || "未入力"}</div>
            </div>
            <div class="field">
              <div class="label">メッセージ</div>
              <div class="value message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            このメールはポートフォリオサイトのお問い合わせフォームから送信されました。
          </div>
        </body>
      </html>
    `;

    // メールの内容
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `ポートフォリオからのお問い合わせ: ${name} 様より`,
      html: htmlContent,
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
