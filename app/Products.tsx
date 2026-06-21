'use client'

import { Code } from 'lucide-react'

import { Animation, SectionBackground } from './components/Animation'

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="min-h-screen bg-white flex items-center py-24"
    >
      <SectionBackground color="blue" />
      <div className="container mx-auto px-6 md:px-12 text-center">
        <Animation animation="scale-up">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Products
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-16"></div>
        </Animation>

        <Animation delay={200} animation="blur-in">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-12 relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size:20px_20px"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Code className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Coming Soon...
              </h3>
              <p className="text-slate-500 text-lg max-w-lg mx-auto">
                現在、新しいプロダクトを絶賛開発中です。
                <br />
                公開までもうしばらくお待ちください。
              </p>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  )
}
