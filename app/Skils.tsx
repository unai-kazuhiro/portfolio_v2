'use client'

import { Layout, Code, Wrench, Database, Check } from 'lucide-react'

import { Animation, SectionBackground } from './components/Animation'

export default function Skills() {
  const skills = [
    {
      category: 'Backend',
      icon: <Code className="w-8 h-8 text-red-500" />,
      items: ['SpringBoot', 'Java', 'Node.js'],
      desc:
        '大手企業案件に参画し、大規模開発の経験と可読性が高い実装を心がけます。',
    },
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      desc: 'アニメーションを交えた、美しくサクサク動く画面を構築します。',
    },
    {
      category: 'DB',
      icon: <Database className="w-8 h-8 text-orange-500" />,
      items: [
        'SSMS',
        'SQLDeveloper',
        'A5:SQL Mk-2',
        'PostgreSQL',
        'SQLServer',
        'Oracle Database',
      ],
      desc: '多様なツールを用いた経験あり。',
    },
    {
      category: 'Others',
      icon: <Check className="w-8 h-8 text-emerald-500" />,
      items: ['Git', 'JP1', 'Jenkins', 'Confluence', 'Jira', 'Azure'],
      desc: '多様なツールを用いた経験あり。',
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-white-900 flex items-center py-24 text-slate"
    >
      <SectionBackground color="orange" />
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
                <p className="text-slate-700 mb-6 grow leading-relaxed">
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
