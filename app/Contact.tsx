'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { sendEmail } from './components/sendEmail'
import { Mail, Send, Loader2 } from 'lucide-react'
import { Animation } from './components/Animation'

// 送信ボタンコンポーネント（フォームの中の子要素である必要があります）
function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-all shadow-md disabled:bg-slate-400"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          送信中...
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          送信する
        </>
      )}
    </button>
  )
}

export default function Contact() {
  // サーバーアクションを紐付け
  const [state, action] = useActionState(sendEmail, null)

  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex items-center py-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <Animation animation="slide-right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-orange-500 w-8 h-8" />
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                  Contact
                </h2>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-6">
                まずはお気軽に
                <br />
                ご相談ください。
              </h3>
            </div>
          </Animation>

          <Animation delay={200} animation="slide-left">
            <form
              action={action}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  お名前 / 会社名
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  メールアドレス
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  placeholder="mail@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  ご相談内容
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="Webサイト制作について相談したいです。"
                ></textarea>
              </div>
              <SubmitButton />

              {/* 送信結果メッセージの表示 */}
              {state && (
                <p
                  className={`text-center font-bold ${
                    state.success ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </Animation>
        </div>
      </div>
    </section>
  )
}
