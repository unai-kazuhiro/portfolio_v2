'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, message: 'すべての項目を入力してください。' }
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // 最初はresend指定のアドレス
      to: 'utti0317@gmail.com', // あなたの受信アドレス
      subject: `ポートフォリオからの問い合わせ: ${name}様より`,
      text: `名前: ${name}\nメール: ${email}\n\n内容:\n${message}`,
    })
    return {
      success: true,
      message: '送信しました！ご連絡ありがとうございます。',
    }
  } catch (error) {
    return { success: false, message: '送信に失敗しました。' }
  }
}
