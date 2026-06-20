'use client'

import { User } from 'lucide-react'

import { Animation } from './components/Animation'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-50 flex items-center py-24"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Animation
            className="order-2 md:order-1 relative"
            animation="slide-right"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 md:aspect-square shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Working collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          </Animation>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <Animation animation="slide-left">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-orange-500 w-6 h-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  About Me
                </h2>
              </div>
            </Animation>

            <Animation delay={100} animation="slide-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
                技術とデザインの橋渡しをし、
                <br />
                <span className="text-blue-600">
                  あなたの想いを形にします。
                </span>
              </h3>
            </Animation>

            <Animation delay={200} animation="slide-left">
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  ソフトウェアエンジニアとして活動していますが、私の情熱は「人」と「ビジネス」をつなぐWebサイトを作ることです。
                </p>
                <p>
                  「デザインのことはよくわからない」「Webサイトを作りたいけど、どこから始めればいいか迷っている」
                  そんな個人経営者様や小規模ビジネスの皆様にこそ、私のスキルを役立ててほしいと考えています。
                </p>
                <p>
                  専門用語は極力使わず、ヒアリングを重ねながら、あなたのビジネスの魅力を最大限に引き出す、美しくサクサク動くWebサイトをご提案します。
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  )
}
