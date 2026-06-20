'use client'

import { Mail, Send } from 'lucide-react'

import { Animation } from './components/Animation'

export default function Contact() {
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
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                「こんなWebサイト作れるかな？」「費用はどれくらい？」など、漠然としたご相談でも大歓迎です。
                <br />
                以下のフォーム、または各種SNSよりお気軽にご連絡ください。
              </p>
            </div>
          </Animation>

          <Animation delay={200} animation="slide-left">
            <form
              className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  お名前 / 会社名
                </label>
                <input
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
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                  placeholder="Webサイト制作について相談したいです。"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-orange-500 text-white font-bold py-4 rounded-xl transition-colors shadow-md"
              >
                <Send className="w-5 h-5" />
                送信する
              </button>
            </form>
          </Animation>
        </div>
      </div>
    </section>
  )
}
