'use client'

import { Layout, Smartphone, Code, Wrench } from 'lucide-react'

import { Animation } from './components/Animation'

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      desc: 'アニメーションを交えた、美しくサクサク動く画面を構築します。',
    },
    {
      category: 'Design & UX',
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      items: ['Responsive Design', 'Mobile First', 'UI/UX', 'Framer Motion'],
      desc: 'スマホで見てもPCで見ても、迷わず使えるデザインを心がけています。',
    },
    {
      category: 'Backend & Others',
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      items: ['Node.js', 'Firebase', 'Git', 'Vercel'],
      desc:
        'お問い合わせフォームの設置など、必要な裏側のシステムも対応します。',
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 flex items-center py-24 text-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Animation animation="fade-up">
          <div className="flex flex-col items-center mb-16 text-center">
            <Wrench className="text-orange-400 w-8 h-8 mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-2xl text-lg">
              最新の技術を使いながらも、目指すのは「お客様にとっての使いやすさ」です。
            </p>
          </div>
        </Animation>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Animation key={index} delay={index * 200} animation="flip-up">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors h-full flex flex-col">
                <div className="bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-100">
                  {skill.category}
                </h3>
                <p className="text-slate-400 mb-6 grow leading-relaxed">
                  {skill.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  )
}
