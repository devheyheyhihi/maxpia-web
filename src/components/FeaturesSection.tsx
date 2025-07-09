"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import ContactModal from '@/components/ContactModal'; // 모달 컴포넌트 임포트

export default function FeaturesSection() {
  const [isModalOpen, setModalOpen] = useState(false);

  const features = [
    {
      title: "회사소개",
      icon_title: "회사소개",
      description: "맥스피아아이시티의 비전과 핵심 가치를 확인해보세요.",
      icon: "/icon_features_1.png",
      btn_description: "회사 소개 더 알아보기",
      url: "/about",
    },
    {
      title: "솔루션",
      icon_title: "솔루션",
      description: "다양한 블록체인 기술 솔루션을 소개합니다.",
      icon: "/icon_features_2.png",
      btn_description: "솔루션 자세히 보기",
      url: "/solutions",
    },
    {
      title: "퀀텀체인(QCC) 알아보기",
      icon_title: "QCC",
      description: "퀀템체인의 기술과 활용 사례를 확인하세요.",
      icon: "/icon_features_5.png",
      btn_description: "퀀텀체인 자세히 보기",
      url: "/qcc",
    },
    {
      title: "지금 상담 신청하기",
      icon_title: "상담 신청하기",
      description: "궁금한 점을 빠르게 상담 받아보세요.",
      icon: "/icon_features_6.png",
      btn_description: "상담 바로가기",
      action_type: 'scroll', // 스크롤 액션 타입으로 변경
      target: 'contact' // 스크롤할 대상 섹션 ID 추가
    },
    {
      title: "연락처 및 위치 보기",
      icon_title: "연락처 및 위치",
      description: "오시는 길과 연락처 정보를 확인하세요.",
      icon: "/icon_features_10.png",
      btn_description: "바로가기", 
      action_type: 'modal', // 모달 액션 타입 추가
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

  const handlePrev = () => {
    const container = scrollRef.current
    if (!container) return
    const firstCard = container.querySelector('.feature-card') as HTMLElement | null
    if (!firstCard) return
    const scrollAmount = firstCard.offsetWidth + 24 // 카드 폭 + gap(1.5rem)
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }

  const handleButtonClick = (feature: typeof features[0]) => {
    if (feature.action_type === 'modal') {
      setModalOpen(true);
    } else if (feature.action_type === 'scroll' && feature.target) {
      const targetElement = document.getElementById(feature.target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (feature.url) {
      window.location.href = feature.url;
    }
  };

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
                <h3 className="text-xl font-semibold text-gray-900 mb-10">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <button onClick={() => handleButtonClick(feature)} className='mt-auto w-full h-10 bg-white hover:bg-[#04AAAB] hover:text-white flex items-center px-4 rounded-lg font-semibold'>
                  {feature.btn_description}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 섹션 전체 우측 페이드 효과 */}
      <div className="absolute top-0 right-0 w-60 h-full pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.87) 50%, rgb(255, 255, 255) 100%, transparent 100%)'
      }}/>

      {/* 좌측 이동 버튼 */}
      <button
        onClick={handlePrev}
        className="hidden md:flex text-xl font-semibold items-center justify-center absolute top-[64%] -translate-y-1/2 left-4 z-40 rounded-[10%] shadow-lg p-2 bg-[#04AAAB] text-white transition-colors w-10 h-10"
        aria-label="이전 카드"
      >
        <span>&lt;</span>
      </button>

      {/* 우측 이동 버튼 */}
      <button
        onClick={handleNext}
        className="hidden md:flex text-xl font-semibold items-center justify-center absolute top-[64%] -translate-y-1/2 right-4 z-40 rounded-[10%] shadow-lg p-2 bg-[#04AAAB] text-white transition-colors w-10 h-10"
        aria-label="다음 카드"
      >
        <span>&gt;</span>
      </button>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
} 