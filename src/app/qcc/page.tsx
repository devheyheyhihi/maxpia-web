"use client"

import Header from '@/components/Header'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function QccPage() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <div className='absolute top-0 left-0 w-full z-50'>
          <Header transparent />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-12 py-24 md:py-0" style={{ background: 'linear-gradient(to top right, #030518 0%, #030518 60%, #0A124E 100%)' }}>
        {/* Left Content */}
        <div className="text-left text-white">
          <h2 className="text-4xl md:text-5xl text-[#80B2FF] font-bold leading-relaxed mb-4">
            퀀텀체인 (QuantumChain)<br />블록체인 플랫폼 소개
          </h2>

          <p className="text-lg leading-relaxed mb-10">
            퀀텀체인(QCC, Quantum Chain)은 (주)맥스피아이아아시티가 개발한 차세대 블록체인 플랫폼으로,<br/>
            양자컴퓨팅 기술을 활용하여 초고속 거래 처리와 강력한 보안성을 동시에 실현한 혁신적인 프로젝트입니다.<br/>
            2024년 8월 25일 출시된 퀀텀체인은 스마트 계약, 효율적 채굴, 분산 애플리케이션(dApp) 생태계 등을<br/>
            폭넓게 지원하며 미래 디지털 자산 생태계를 주도할 기반 기술로 주목받고 있습니다.
          </p>

          <div className="space-y-4 w-full md:w-[80%] text-black font-semibold">
            <button className="w-full flex items-center justify-between bg-gradient-to-r from-[#ffffff] to-[#999999] backdrop-blur-sm rounded-xl py-4 px-6 text-sm md:text-base hover:from-[#999999]">
              Quantum Chain Block Explorer
              <span className="text-xl">&rarr;</span>
            </button>
            <button className="w-full flex items-center justify-between bg-gradient-to-r from-[#ffffff] to-[#999999] backdrop-blur-sm rounded-xl py-4 px-6 text-sm md:text-base hover:from-[#999999]">
              Quantum Chain
              <span className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="shrink-0 mt-12 md:mt-0">
          <Image src="/img_qcc_section_hero.png" alt="QuantumChain Logo" width={245} height={230} className="w-60 md:w-80 h-auto" />
        </div>
      </section>

      {/* 기술 구조 섹션 */}
      <section className="py-24 flex flex-col items-center justify-center px-6 md:px-20" style={{ background: 'linear-gradient(to bottom, #030518 0%, #030518 60%, #444566 100%)' }}>
        {/* 헤더 아이콘 */}
        <div className="w-full max-w-6xl mb-12">
          <Image src="/icon_qcc_section_2.png" alt="아이콘" width={500} height={100} className="h-12 md:h-16 w-auto" />
        </div>

        {/* 카드 그리드 */}
        <div className="w-full max-w-6xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Image src="/img_1_qcc_section_2.png" alt="기술 카드 1" width={600} height={400} className="w-full h-auto" />
          <Image src="/img_2_qcc_section_2.png" alt="기술 카드 2" width={600} height={400} className="w-full h-auto" />
          <Image src="/img_3_qcc_section_2.png" alt="기술 카드 3" width={600} height={400} className="w-full h-auto" />
          <Image src="/img_4_qcc_section_2.png" alt="기술 카드 4" width={600} height={400} className="w-full h-auto" />
          <Image src="/img_5_qcc_section_2.png" alt="기술 카드 5" width={600} height={400} className="w-full h-auto" />
        </div>
      </section>

      {/* 코인 정보 섹션 */}
      <section className="py-24 flex flex-col items-center justify-center px-6 md:px-20" style={{ background: 'linear-gradient(to bottom, #030518 0%, #030518 60%, #444566 100%)' }}>
        {/* 섹션 헤더 */}
        <div className="w-full max-w-6xl border-b border-[#5DA0FF] pb-8 mb-12">
          <Image src="/icon_qcc_section_3.png" alt="아이콘" width={500} height={100} className="h-12 md:h-16 w-auto" />
        </div>

        {/* 본문 레이아웃 */}
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 mt-12">
          {/* 좌측 정보 카드 리스트 */}
          <div className="grid gap-6 md:grid-cols-2">
            {[{
              title: '코인명',
              desc: 'QCC (Quantum Chain Coin)'
            }, {
              title: '출시일',
              desc: '2024년 8월 25일'
            }, {
              title: '기술기반',
              desc: '양자 얽힘 및 중첩 기술'
            }, {
              title: '주요 기능',
              desc: '스마트 계약, 초고속 거래, 양자 내성 보안, 고효율 채굴'
            }, {
              title: '유틸리티',
              desc: '실생활 연계, 다양한 블록체인 기반 서비스 확장 예정'
            }].map((item, i) => (
              <div key={i} className={`p-[1px] rounded-xl bg-gradient-to-b from-[#F4E6F7] to-[#A2ECFF] ${i === 4 ? 'md:col-span-2' : ''}`}>
                <div className="h-full w-full bg-[#030518] rounded-xl p-6 text-white space-y-2">
                  <h4 className="text-lg font-semibold text-gray-200">{item.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 우측 링크 카드 2x2 */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: '공식 홈페이지', from: '#384093', to: '#1C1A6B' },
              { label: '블록 탐색기', from: '#384093', to: '#18546E' },
              { label: '웹지갑', from: '#384093', to: '#27B695' },
              { label: '백서', from: '#384093', to: '#992B8C' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-t-xl overflow-hidden flex flex-col items-center justify-between"
                style={{
                  backgroundImage: `linear-gradient(180deg, ${card.from} 0%, ${card.to} 80%)`
                }}
              >
                <div className="flex-1 flex flex-col items-center justify-center py-6 text-white space-y-4">
                  <Image src="/icon_2_qcc_section_3.png" alt="icon" width={60} height={60} />
                  <span className="text-sm">{card.label}</span>
                </div>
                <button className="w-full bg-[#171717] text-white text-xs py-2">바로가기</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 향후 발전 방향 섹션 */}
      <section className="py-24 flex flex-col items-center justify-center px-6 md:px-20" style={{ background: 'linear-gradient(to bottom, #030518 0%, #030518 60%, #050824 100%)' }}>
        {/* 섹션 헤더 */}
        <div className="w-full max-w-6xl mb-12">
          <Image src="/icon_qcc_section_4.png" alt="아이콘" width={500} height={100} className="h-12 md:h-16 w-auto" />
        </div>

        {/* 카드 레이아웃 */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {[
            { icon: '/img_1_qcc_section_4.png', text: '실생활 서비스 연계 확대 및<br />글로벌 파트너십 구축' },
            { icon: '/img_2_qcc_section_4.png', text: '지속적인 코인 소각 및 리워드<br />개선을 통한 토큰 가치 안정화' },
            { icon: '/img_3_qcc_section_4.png', text: '블록체인, 보안, AI 융합을 위한<br />전문 R&D 조직 운영 강화' },
            { icon: '/img_4_qcc_section_4.png', text: '국제 규제 대응을 위한<br />법률·컴플라이언스 체계 고도화' },
          ].map((card, index) => (
            <div key={index} className="border border-white rounded-2xl p-6 flex flex-col items-center text-center text-white space-y-6 aspect-square justify-center">
              <div className="w-full h-1/2 flex items-end justify-center">
                <Image src={card.icon} alt="" width={100} height={100} className="w-[30%] h-auto shrink-0" />
              </div>
              <div className="w-full h-1/2 flex items-center justify-center">
                <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: card.text }} />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
} 