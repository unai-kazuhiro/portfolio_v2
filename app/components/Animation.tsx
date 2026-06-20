'use client'

import React, { useState, useEffect } from 'react'

// スクロール時に要素が画面に入ったか、出たかを検知するフック（何度でも発火）
function useInView(options = { threshold: 0.1 }) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(([entry]) => {
      // 画面に入ったらtrue、出たらfalseにする（繰り返しアニメーションの実現）
      setInView(entry.isIntersecting)
    }, options)

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, options])

  return [setRef, inView] as const
}

// ふわっと下から浮かび上がるアニメーションなど、複数の種類をサポートするラッパー
type AnimationType =
  | 'fade-up'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up'
  | 'flip-up'
  | 'blur-in'

export const Animation = ({
  children,
  delay = 0,
  className = '',
  animation = 'fade-up',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  animation?: AnimationType
}) => {
  const [ref, inView] = useInView({ threshold: 0.2 })

  const getAnimationClasses = () => {
    if (!inView) {
      switch (animation) {
        case 'slide-left':
          return 'opacity-0 translate-x-16' // 右から左へ
        case 'slide-right':
          return 'opacity-0 -translate-x-16' // 左から右へ
        case 'scale-up':
          return 'opacity-0 scale-90' // 縮小状態から拡大
        case 'flip-up':
          return 'opacity-0 [transform:rotateX(90deg)]' // X軸回転
        case 'blur-in':
          return 'opacity-0 blur-xl scale-105' // ぼかしから鮮明に
        case 'fade-up':
        default:
          return 'opacity-0 translate-y-12'
      }
    }

    switch (animation) {
      case 'slide-left':
      case 'slide-right':
        return 'opacity-100 translate-x-0'
      case 'scale-up':
        return 'opacity-100 scale-100'
      case 'flip-up':
        return 'opacity-100 [transform:rotateX(0deg)]'
      case 'blur-in':
        return 'opacity-100 blur-none scale-100'
      case 'fade-up':
      default:
        return 'opacity-100 translate-y-0'
    }
  }

  // 3D回転アニメーション用のパースペクティブ設定
  const containerStyle =
    animation === 'flip-up' ? { perspective: '1000px' } : {}

  return (
    <div style={containerStyle} className={className}>
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${getAnimationClasses()}`}
        style={{
          transitionDelay: `${delay}ms`,
          transformOrigin: 'center bottom',
        }}
      >
        {children}
      </div>
    </div>
  )
}

// 遊び心：タイピング風アニメーションコンポーネント
export const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    // 文字を全て打ち終わった後の待機時間
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000)
      return () => clearTimeout(timeout)
    }

    // 文字を全て消し終わった時、次の単語へ
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    // タイピングと消去のスピード調整
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
      },
      reverse ? 50 : 150,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  // 最も長い単語を基準に幅を確保するためのダミーテキスト
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), '')

  return (
    <div className="relative inline-flex flex-col items-center justify-center min-w-full md:min-w-0">
      {/* 見えないダミーテキストで最大幅と高さを確保（スマホでも中央寄せを維持しガタつき防止） */}
      <span
        className="invisible pointer-events-none block whitespace-nowrap"
        aria-hidden="true"
      >
        {longestWord}
      </span>
      {/* 実際に表示・アニメーションする文字 */}
      <span className="absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300 whitespace-nowrap">
        <span>{words[index].substring(0, subIndex)}</span>
        {/* 点滅するカーソル */}
        <span className="animate-[pulse_1s_ease-in-out_infinite] border-r-4 border-orange-400 ml-1 h-[0.9em] inline-block align-text-bottom -mb-1"></span>
      </span>
    </div>
  )
}
