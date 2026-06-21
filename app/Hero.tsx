'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Code, Layout, Smartphone, ChevronRight } from 'lucide-react'

import { Animation, Typewriter } from './components/Animation'

export default function Hero() {
  // 遊び心：マウス追従用の状態
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  // パララックス（視差効果）用のマウスオフセット (-1 to 1)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 画面中心からのマウス位置を計算し、視差効果の強さを決める
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setParallaxOffset({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  // 浮遊するグラスモーフィズム図形の設定
  const shapes = [
    {
      type: 'glass',
      size: 'w-24 h-24 md:w-32 md:h-32 rounded-3xl rotate-12',
      top: '15%',
      left: '10%',
      delay: '0s',
      speed: 20,
      icon: <Code className="text-slate/40 w-10 h-10 md:w-12 md:h-12" />,
    },
    {
      type: 'glass',
      size: 'w-20 h-20 md:w-28 md:h-28 rounded-full',
      top: '20%',
      left: '80%',
      delay: '1s',
      speed: -30,
      icon: <Layout className="text-slate/40 w-8 h-8 md:w-10 md:h-10" />,
    },
    {
      type: 'glass',
      size: 'w-16 h-16 md:w-24 md:h-24 rounded-2xl -rotate-12',
      top: '70%',
      left: '15%',
      delay: '2s',
      speed: 40,
      icon: <Smartphone className="text-slate/40 w-6 h-6 md:w-8 md:h-8" />,
    },
    {
      type: 'glass',
      size: 'w-12 h-12 md:w-16 md:h-16 rounded-full',
      top: '65%',
      left: '75%',
      delay: '0.5s',
      speed: -15,
      icon: null,
    },
    // ぼんやりした光のオーブ
    {
      type: 'glow',
      size: 'w-64 h-64 rounded-full blur-[80px] bg-orange-500/30',
      top: '40%',
      left: '70%',
      delay: '0s',
      speed: 10,
      icon: null,
    },
    {
      type: 'glow',
      size: 'w-72 h-72 rounded-full blur-[100px] bg-blue-500/20',
      top: '50%',
      left: '5%',
      delay: '1s',
      speed: -15,
      icon: null,
    },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 遊び心：マウスに追従する隠しスポットライト */}
      <div
        className="pointer-events-none absolute w-160 h-160 bg-orange-500/10 rounded-full blur-[100px] transition-transform duration-700 ease-out z-10 hidden md:block"
        style={{
          transform: `translate(${mousePos.x - 320}px, ${mousePos.y - 320}px)`,
        }}
      />

      {/* High-res background image */}
      <div className="absolute inset-0 z-0">
        <img
          //   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
          alt="Workspace"
          className="w-full h-full object-cover transform scale-110 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-white-900/70 mix-blend-multiply backdrop-blur-[2px]"></div>
        {/* 微細なグリッドパターン（Web/エンジニア感を演出） */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none"></div>
      </div>

      {/* 遊び心：パララックス浮遊シェイプ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {shapes.map((shape, i) => {
          const xMove = parallaxOffset.x * shape.speed
          const yMove = parallaxOffset.y * shape.speed

          return (
            <div
              key={i}
              className="absolute transition-transform duration-300 ease-out"
              style={{
                top: shape.top,
                left: shape.left,
                transform: `translate(${xMove}px, ${yMove}px)`,
              }}
            >
              <div
                className={`${shape.size} ${
                  shape.type === 'glass'
                    ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex items-center justify-center'
                    : ''
                }`}
                style={{
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: shape.delay,
                }}
              >
                {shape.icon}
              </div>
            </div>
          )
        })}
      </div>

      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center mt-16 pointer-events-none">
        <Animation delay={0} animation="fade-up">
          <div className="relative inline-flex items-center justify-center mb-8 pointer-events-auto">
            {/* 装飾的な背後のグロー */}
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
            <span className="relative inline-block py-1.5 px-5 rounded-full bg-white-900/50 text-orange-400 border border-orange-500/30 text-sm md:text-base font-semibold tracking-widest backdrop-blur-md shadow-lg">
              SOFTWARE ENGINEER
            </span>
          </div>
        </Animation>

        <Animation delay={200} animation="blur-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate leading-tight mb-6 min-h-[3em] md:min-h-[2.5em] flex flex-col items-center justify-center pointer-events-auto">
            <Typewriter words={['Kazuhiro', 'Unai', 'Kazuhiro Unai']} />
          </h1>
        </Animation>

        {/* <Animation delay={400} animation="fade-up">
          <div className="relative pointer-events-auto bg-white-900/30 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl max-w-2xl mx-auto mb-12 shadow-2xl">
            <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed drop-shadow-md">
              個人経営・小規模ビジネスの課題に寄り添い、
              <br className="hidden md:block" />
              美しく、サクサク動くWebサイトを構築します。
            </p>
          </div>
        </Animation> */}

        <Animation delay={600} animation="scale-up">
          <a
            href="#contact"
            className="group pointer-events-auto relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 font-bold text-slate-700 bg-linear-to-r from-orange-500 to-orange-400 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] active:scale-95"
          >
            {/* ボタン内のキラッと光るエフェクト */}
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 skew-x-[-45deg] translate-x-[-150%] group-hover:animate-[shine_1s_ease-out]"></span>
            <span className="relative flex items-center gap-2 text-lg">
              Contact{' '}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </Animation>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-auto">
        <a
          href="#about"
          aria-label="Scroll down"
          className="block w-8 h-12 rounded-full border-2 border-slate/30 items-start justify-center p-2 backdrop-blur-sm hover:border-slate/60 transition-colors"
        >
          <div className="w-1 h-3 bg-orange-400 rounded-full animate-[scroll_2s_ease-in-out_infinite]"></div>
        </a>
      </div>
    </section>
  )
}
