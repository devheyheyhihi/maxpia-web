"use client"

import { useRef } from 'react'

export default function SkillStackSection() {
  const skillCards = [
    {
      id: 1,
      image: "/skillstack_1.webm",
      title: "풍부한 경험과 전문성",
      description: "2016년부터 블록체인 기반 금융 솔루션, 가상 서버 운영, 암호화폐 채굴 등 다양한 분야에서 축적된 노하우"
    },
    {
      id: 2,
      image: "/skillstack_2.webm",
      title: "차별화된 기술력",
      description: "시스템 통합 운영, 고속 거래 처리, 스마트 계약 등 첨단 기술을 바탕으로 효율적이고 안정적인 블록체인 서비스 제공"
    },
    {
      id: 3,
      image: "/skillstack_3.webm",
      title: "안정적인 채굴 인프라",
      description: "전문 인력 배치와 지속적인 설비 점검, 합규적 채굴장 운영으로 신뢰도 높은 위탁 채굴 서비스 제공"
    },
    {
      id: 4,
      image: "/skillstack_4.webm",
      title: "퀀텀체인(QCC) 등 자체 프로젝트 보유",
      description: "양자 컴퓨팅 기반의 고성능·고보안 블록체인 기술을 활용한 독자적 프로젝트 추진"
    },
    {
      id: 5,
      image: "/skillstack_5.webm",
      title: "투명하고 신속한 고객 대응",
      description: "실시간 데이터 모니터링, 정산 시스템, 온라인 CS 등 고객 중심의 운영 체계 구축"
    },
    {
      id: 6,
      image: "/skillstack_6.webm",
      title: "글로벌 확장성과 지속 가능성",
      description: "규제 대응 전략, 코인 생태계 관리, R&D 투자 등 글로벌 시장을 겨냥한 성장 전략 실행 중"
    }
  ]

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      video.play()
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video')
    if (video) {
      video.pause()
      video.currentTime = 0 // 영상을 처음으로 되돌림
    }
  }

  return (
    <section className="bg-[##FBFAFA] text-[#545F5F] py-20 h-auto">
      <div className="mx-[10%]">
        <h1 className="text-3xl font-bold mb-14">
          (주)맥스피아아이시티는 2016년 설립 이후,
        </h1>
        <p className="text-lg leading-[170%]">
          블록체인 기반 금융 솔루션, 가상 서버 운영, 암호화폐 채굴 등 다양한 분야에서 꾸준히 성장해온 IT 전문 기업입니다. <br />
          체계적인 시스템 통합 운영과 차별화된 기술력, 안정적인 채굴 인프라를 기반으로 고객 중심의 블록체인 서비스를 제공합니다. <br />
          퀀텀체인(QCC)을 비롯한 다양한 프로젝트를 통해 글로벌 블록체인 생태계의 지속 가능한 미래를 이끌어갑니다.
        </p>
      </div>
      <div className="w-full px-[10%] py-16">
        <div className="grid grid-cols-3 gap-8">
          {skillCards.map((card) => (
            <div 
              key={card.id} 
              className="group bg-white rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition-shadow min-h-[300px] cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mb-6">
                <video
                  src={card.image}
                  loop
                  muted
                  playsInline
                  className="w-[120%] h-auto object-contain cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-3 text-left">{card.title}</h3>
                <p className="text-gray-600 text-left text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 