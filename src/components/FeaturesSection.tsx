"use client"

import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'

export default function FeaturesSection() {
  const features = [
    {
      title: "회사소개",
      icon_title: "회사소개",
      description: "맥스피아아이시티의 비전과 핵심 가치를 확인해보세요.",
      icon: "/icon_features_1.png",
      btn_description: "회사 소개 더 알아보기"
    },
    {
      title: "솔루션",
      icon_title: "솔루션",
      description: "다양한 블록체인 기술 솔루션을 소개합니다.",
      icon: "/icon_features_2.png",
      btn_description: "솔루션 자세히 보기"
    },
    {
      title: "채굴 서비스 문의하기",
      icon_title: "채굴서비스",
      description: "안전하고 효율적인 채굴 서비스를 상담해보세요.",
      icon: "/icon_features_3.png",
      btn_description: "채굴 서비스 자세히 보기"
    },
    {
      title: "프로젝트 파트너십 제안하기",
      icon_title: "프로젝트",
      description: "협업을 통한 블록체인 프로젝트 제안을 기다립니다.",
      icon: "/icon_features_4.png",
      btn_description: "채굴 서비스 자세히 보기"
    },
    {
      title: "퀀텀체인(QCC) 알아보기",
      icon_title: "QCC",
      description: "퀀템체인의 기술과 활용 사례를 확인하세요.",
      icon: "/icon_features_5.png",
      btn_description: "채굴 서비스 자세히 보기"
    },
    {
      title: "지금 상담 신청하기",
      icon_title: "상담 신청하기",
      description: "궁금한 점을 빠르게 상담 받아보세요.",
      icon: "/icon_features_6.png",
      btn_description: "채굴 서비스 자세히 보기"
    },
    {
      title: "맞춤형 블록체인 컨설팅 받기",
      icon_title: "컨설팅 받기",
      description: "귀사에 맞는 블록체인 전략을 제안합니다.",
      icon: "/icon_features_7.png",
      btn_description: "채굴 서비스 자세히 보기"
    },
    {
      title: "투자 및 협업 문의",
      icon_title: "투자 및 협업",
      description: "투자 및 공동사업에 대해 문의해주세요.",
      icon: "/icon_features_8.png",
      btn_description: "채굴 서비스 자세히 보기"
    },
    {
      title: "기술 백서 다운로드",
      icon_title: "기술 백서",
      description: "퀀텀체인의 핵심 기술 자료를 받아보세요.",
      icon: "/icon_features_9.png",
      btn_description: "자료 다운로드"
    },
    {
      title: "연락처 및 위치 보기",
      icon_title: "연락처 및 위치",
      description: "오시는 길과 연락처 정보를 확인하세요.",
      icon: "/icon_features_10.png",
      btn_description: "채굴 서비스 자세히 보기"
    }
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleFocus = (idx: number) => {
    const container = scrollRef.current
    const card = document.getElementById(`feature-container-${idx}`)
    if (container && card) {
      const containerRect = container.getBoundingClientRect()
      const cardRect = card.getBoundingClientRect()
      const offset = cardRect.left - containerRect.left + container.scrollLeft - 16 // 16px padding
      container.scrollTo({ left: offset, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    const container = scrollRef.current
    if (!container) return
    const firstCard = container.querySelector('.feature-card') as HTMLElement | null
    if (!firstCard) return
    const scrollAmount = firstCard.offsetWidth + 24 // 카드 폭 + gap(1.5rem)
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section 
      id="features" 
      className="py-20 bg-center bg-no-repeat relative overflow-x-hidden"
      style={{
        backgroundImage: "url('/bg_features.png')",
        backgroundSize: '100% 100%',
        // minHeight: '80vh'
      }}
    >
      <div className="text-left container mx-auto px-2 relative z-10 overflow-x-hidden">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            맞춤형 솔루션을 찾아보세요.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            귀사의 블록체인 비즈니스 성장을 위한 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* 버튼 그룹 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 px-4 max-w-3xl justify-items-start">
          {features.map((feature, i) => (
            <button
              key={feature.icon_title}
              onClick={() => handleFocus(i)}
              className="bg-white text-[#474747] w-full h-12 flex items-center justify-center rounded-lg shadow-lg hover:bg-[#04AAAB] hover:text-white transition-colors font-semibold"
            >
              {feature.icon_title.replace(/\(.+\)/, '').replace(' 알아보기', '').replace(' 문의하기', '')}
            </button>
          ))}
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6" style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                id={`feature-container-${index}`}
                className="feature-card snap-start p-6 my-10 transition-shadow flex-shrink-0 bg-center bg-no-repeat w-[32%] aspect-[1.2/1] flex flex-col justify-between shadow-xl rounded-[5%]"
                style={{
                  backgroundImage: "url('/card_features.png')",
                  backgroundSize: '100% 100%'
                }}
              >
                <div className="mb-10">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <p className='mt-auto w-full h-10 bg-white hover:bg-[#04AAAB] hover:text-white flex items-center px-4 rounded-lg font-semibold'>
                  {feature.btn_description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 섹션 전체 우측 페이드 효과 */}
      <div className="absolute top-0 right-0 w-60 h-full pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.87) 50%, rgb(255, 255, 255) 100%, transparent 100%)'
        }}></div>

      {/* 우측 이동 버튼 (페이드 위) */}
      <button
        onClick={handleNext}
        className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 z-30 rounded-[10%] shadow-lg p-2 bg-[#04AAAB] text-white transition-colors w-10 h-10"
        aria-label="다음 카드"
      >
        <span>&gt;</span>
      </button>
    </section>
  )
} 