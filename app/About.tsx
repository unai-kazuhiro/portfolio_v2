'use client'

import Image from 'next/image'

import { User } from 'lucide-react'

import { Animation, SectionBackground } from './components/Animation'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white flex items-center py-24"
    >
      <SectionBackground color="orange" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Animation
            className="order-2 md:order-1 relative"
            animation="slide-right"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 md:aspect-square shadow-2xl">
              <Image
                src="/AboutMe.png"
                alt="Working collaboration"
                fill
                className="object-cover"
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
                  現在は神奈川県を拠点に、主にJavaを用いたバックエンド開発に携わるエンジニアとして活動しています。
                </p>
                <p>
                  前職はパーソナルトレーナーという異色の経歴を持っていますが、「目標に向かって伴走し、継続的に改善を重ねる」というプロセスは、現在のシステム開発にも強く通じていると感じています。
                </p>
                <p>
                  技術に対する好奇心が強く、バックエンドの知見にとどまらずフロントエンド領域も広げたいという思いから、本ポートフォリオは自己学習を兼ねてJavaScriptとReactを採用してゼロから構築しました。
                </p>
                <p>
                  プライベートでは、二人の子どもたちと全力で遊ぶ時間が何よりの原動力です。2028年頃には自然豊かな石川県への移住を予定しており、家族との豊かな暮らしを大切にしながら、場所にとらわれず価値を提供できるエンジニアとしてさらに技術領域を広げていきたいと考えています。
                </p>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  )
}
