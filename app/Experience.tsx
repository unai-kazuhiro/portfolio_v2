'use client'

import { Briefcase } from 'lucide-react'

import { Animation, SectionBackground } from './components/Animation'

export default function Experience() {
  const experiences = [
    {
      period: '2022 - ',
      role: 'バックエンドエンジニア',
      company: '某IT企業',
      description:
        'Javaやローコード、ノーコードなど様々なツールを経験し、大手企業のシステム開発に従事。現在、大手企業のロールシステムの開発に参画中。',
    },
    {
      period: '2021 - 2021',
      role: '未経験エンジニア',
      company: '某IT企業',
      description:
        '未経験エンジニアとしての活動をスタート。自社開発ツールを用いてプログラミングについて学びながらチーム開発を経験。',
    },
    {
      period: '2016 - 2020',
      role: 'パーソナルトレーナー',
      description:
        '約1000件以上のトレーニングを担当。加えて、資格取得スクール開催のための集客を担当。（SNS広告、Google広告の運用）',
    },
  ]

  return (
    <section
      id="experience"
      className="min-h-screen bg-white flex items-center py-24 relative overflow-hidden"
    >
      <SectionBackground color="blue" />
      {/* Background decoration */}
      <div className="absolute top-0 right-[-10] w-1/2 h-full bg-slate-50/50 -skew-x-12 transform origin-top z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <Animation animation="scale-up">
          <div className="flex flex-col items-center mb-16 text-center">
            <Briefcase className="text-orange-500 w-8 h-8 mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Experience
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </Animation>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <Animation
              key={index}
              delay={index * 150}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
            >
              <div className="relative pl-8 md:pl-0">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

                <div
                  className={`md:flex items-center justify-between w-full mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm translate-x-[-5.5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>

                  <div className="md:w-[45%] mb-2 md:mb-0">
                    <div
                      className={`text-orange-500 font-bold mb-1 ${
                        index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                      }`}
                    >
                      {exp.period}
                    </div>
                  </div>

                  <div
                    className={`md:w-[45%] bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-lg transition-shadow ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {exp.role}
                    </h3>
                    {exp.company && (
                      <p className="text-blue-600 font-medium mb-3">
                        {exp.company}
                      </p>
                    )}
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  )
}
