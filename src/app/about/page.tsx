"use client"

import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutPage() {
  const tabs = ['회사연혁', '조직구성', '설립목적']
  const [activeTab, setActiveTab] = useState(0)

  const histories = [
    {
      period: '2016',
      details: [
        '㈜태강마이닝핀테크 설립 / 비트코인(BTC) 채굴',
        '질소가스냉각 채굴시스템 외 2건을 개발하여 특허 출현',
        '암호화폐 채굴기 판매 및 암호화폐 연구',
        '컨설팅 토탈솔루션구축 암호화폐발행, 국내국외 암호화된 암호화폐 분야에 투자'
    ]
    },
    {
      period: '2017',
      details: [
        'HTS 코인과 업무협약(MOU) 체결',
        'TG코인을 자체 개발',
        'TG 코인몰 개발',
        '이더리움(ETH) 채굴'
    ]
    },
    {
      period: '2019',
      details: [
        '고려대학교 정보보호대학원 양해각서 체결',
        '블록체인에 대한 공동연구와 인재양성',
        '블록체인 기술 소프트웨어 및 플랫폼 개발',
        '블록체인 관련법과 제도 및 사업화 기반을 위한 컨설팅'
    ]
    },
    {
      period: '2020',
      details: [
        'FileCoin 채굴',
        'FPGA 특허로 능동적 대처로 생산비 절감',
        'IPFS 생태계 구축 서비스, 제공자로서의 원스톱 채굴 \n 클라우드 스트리지, 분산형 웹 애플리케이션 등 통합서비스로 기업형 채굴 주력'
    ]
    },
    {
      period: '2022',
      details: [
        '기업부설연구소 등록',
        '헤럴드 블록체인 부문 대한민국 국가사회산업 공헌대상',
        '퀀텀체인(QCC) 개발 착수',
        '알레오(ALEO) 테스트넷 참여'
    ]
    },
    {
      period: '2023~2025',
      details: [
        '벤처 기업 등록',
        '퀀텀체인(QCC) 메인넷 오픈',
        '퀀텀체인 두바이 재단법인 설립 (라이센스 번호 : DMCC-975096)'
      ]
    }
  ]
  const [historyIndex, setHistoryIndex] = useState(histories.length - 1)

  const coreValues = [
    { title: '기술 혁신 (Innovation)', desc: `연구 개발, 블록체인, 보안을 지속적으로 개발로써 새로운 성장 추구`, icon: '/icon_innovation.png' },
    { title: '투명성 (Transparency )', desc: `실시간 데이터 모니터링, 투명한 재무 환경으로 블록체인 솔루션의 운영 철학 정립`, icon: '/icon_transparency.png' },
    { title: '전문성 (Expertise)', desc: `분야별 전문 인력을 체계적인 시스템으로 통합하여 맞춤형 고품질 서비스 제공`, icon: '/icon_expertise.png' },
    { title: '고객중심 (Customer Focus )', desc: `맞춤형 솔루션 컨설팅 제공 및 지속적인 고객지원과 CS 강화`, icon: '/icon_customer.png' },
    { title: '글로벌 지향 (Global Vision )', desc: `국내·해외를 연결하고 세계화 전략 안착으로 글로벌 시장 진출 가속화`, icon: '/icon_global.png' },
  ]

  return (
    <div className="min-h-screen">

        <div className='absolute top-0 left-0 w-full z-50'>
            <Header transparent />
        </div>
      {/* Hero */}
      <section className="h-[400px] md:h-[600px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/banner_about.png')" }}>
        <div className="container mx-auto px-4 text-white max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">"세상을 변화시키는 기업으로 성장하겠습니다."</h1>
          <p className="text-sm md:text-base">- 대표이사 임세택</p>
          <p className="mt-10 leading-relaxed text-sm">
            (주)맥스피아아이시티는 단순한 기술 개발을 넘어, 기술을 통한 사회 변혁의 신뢰 기반의 블록체인 생태계 구축을 목표로 합니다.<br/>
            끊임없는 연구개발과 혁신을 통해 보다 투명하고 안전한 디지털 세상을 실현하는 것이 우리의 사명입니다.
          </p>
        </div>
      </section>

      {/* 회사 연혁 레이아웃 */}
      <section className="container mx-auto px-4 mt-16">
        {/* 탭 */}
        <div className="flex space-x-4 justify-center">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`w-40 h-12 px-6 py-2 text-white rounded-full text-sm md:text-base font-semibold transition-colors ${i === activeTab ? 'bg-[#04AAAB] shadow border-2' : 'bg-[#A8ADAD]'}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* 연혁 탭 내용 */}
        {activeTab === 0 && (
          <>
            {/* 연혁 그래프 이미지 */}
            <div className="my-20">
              <Image src="/img_about.png" alt="회사 연혁 그래프" width={1200} height={150} className="w-full h-auto" />
            </div>

            {/* 연혁 내용 그리드 */}
            <div className="grid md:grid-cols-2 gap-12 my-12">
              {histories.map((h) => (
                <div key={h.period} className="space-y-2">
                  <h3 className={`${h.period === '2023~2025' ? 'text-[#04AAAB]' : 'text-[#809191]'} font-bold text-lg md:text-xl`}>{h.period}</h3>
                  <ul className="list-disc list-inside text-sm text-[#5C5959] space-y-1">
                    {h.details.map((d) => (<li key={d} className="whitespace-pre-line">{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 1 && (
          <div className="my-20 flex justify-center w-full h-full">
            <Image src="/img_about_tab2.png" alt="조직 구성도" width={2000} height={2000} className="w-full max-w-3xl h-auto" />
          </div>
        )}

        {/* 다른 탭 placeholder */}
        {activeTab == 2 && (
          <div className="my-20 p-10 text-center font-semibold text-xl ">
              (주)맥스피아아이시티는 4차 산업혁명 시대의 핵심 기술인<br/> 블록체인과 분산 네트워크 기반 금융 솔루션의 미래 가치를 실현하고자 설립되었습니다.
          </div>
        )}
      </section>
   
      {/* 핵심가치 - 회사연혁 탭에서만 노출 */}
      {activeTab === 0 && (
        <section className="mt-24" style={{ backgroundImage: "url('/bg_about.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="container mx-auto px-4 py-24">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">핵심가치</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {coreValues.map((val) => (
                <div key={val.title} className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[#04AAAB] to-[#ADA8A8] p-6 text-white flex flex-col gap-4">
                  <h3 className="font-semibold text-white">{val.title}</h3>
                  <p className="text-sm whitespace-pre-line leading-relaxed text-white/90 flex-1 mb-10">{val.desc}</p>
                  <Image src={val.icon} alt={val.title} width={40} height={40} className="absolute bottom-4 right-4" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 2 && (
            <div 
                className="py-16 md:py-24 w-full" style={{ backgroundImage: "url('/bg_about_tab3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

                <div className="flex justify-center">
                    <Image src="/img_about_tab3.png" alt="설립 목적 그래픽" width={2000} height={2000} className="w-[100%] md:w-[50%] h-auto" />
                </div>
            </div>
      )}
  </div>
  )
} 