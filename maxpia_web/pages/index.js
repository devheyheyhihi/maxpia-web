import React, { useState } from "react";
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    message: "",
  });

  const navigationItems = [
    { label: "home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "QCC", href: "#qcc" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  const primaryTabs = [
    { label: "회사 소개", active: true },
    { label: "솔루션", active: false },
    { label: "채굴서비스", active: false },
    { label: "프로젝트", active: false },
    { label: "QCC", active: false },
  ];

  const secondaryTabs = [
    { label: "상담 신청하기" },
    { label: "컨설팅 받기" },
    { label: "투자 및 협업" },
    { label: "기술 백서" },
    { label: "연락처 및 위치" },
  ];

  const features = [
    {
      title: "풍부한 경험과 전문성",
      description:
        "2016년부터 블록체인 기반 금융 솔루션, 가상 서버 운영,\n암호화폐 채굴 등 다양한 분야에서 축적된 노하우",
    },
    {
      title: "차별화된 기술력",
      description:
        "시스템 통합 운영, 고속 거래 처리, 스마트 계약 등 첨단\n기술을 바탕으로 효율적이고 안정적인 블록체인\n서비스 제공",
    },
    {
      title: "안정적인 채굴 인프라",
      description:
        "전문 인력 배치와 지속적인 설비 점검, 합규적 채굴장\n운영으로 신뢰도 높은 위탁 채굴 서비스 제공",
    },
  ];

  const additionalFeatures = [
    {
      title: "퀀텀체인(QCC) 등 자체 프로젝트 보유",
      description:
        "양자 컴퓨팅 기반의 고성능·고보안\n블록체인 기술을 활용한 독자적 프로젝트 추진",
    },
    {
      title: "투명하고 신속한 고객 대응",
      description:
        "실시간 데이터 모니터링, 정산 시스템,\n온라인 CS 등 고객 중심의 운영 체계 구축",
    },
    {
      title: "글로벌 확장성과 지속 가능성",
      description:
        "규제 대응 전략, 코인 생태계 관리, R&D 투자 등\n글로벌 시장을 겨냥한 성장 전략 실행 중",
    },
  ];

  const solutionCards = [
    {
      title: "회사소개",
      description: "맥스피아아이시티의\n비전과 핵심 가치를 확인해보세요.",
      buttonText: "회사 소개 더 알아보기",
      buttonStyle: "primary",
    },
    {
      title: "솔루션",
      description: "다양한 블록체인 기술 솔루션을 소개합니다.",
      buttonText: "솔루션 자세히 보기",
      buttonStyle: "secondary",
    },
    {
      title: "채굴 서비스 문의하기",
      description: "안전하고 효율적인 채굴 서비스를 상담해보세요.",
      buttonText: "채굴 서비스 자세히 보기",
      buttonStyle: "secondary",
    },
  ];

  const footerServices = [
    { label: "쿼텀체인(QCC)" },
    { label: "채굴 서비스" },
    { label: "가상 서버" },
    { label: "블록체인 컨설팅" },
  ];

  const footerCompany = [
    { label: "회사 소개" },
    { label: "팀 소개" },
    { label: "채용 정보" },
    { label: "뉴스" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>맥스피아아이시티 - 블록체인의 미래를 만들어갑니다</title>
        <meta name="description" content="블록체인 기반 금융 솔루션, 가상 서버 운영, 암호화폐 채굴 등 다양한 분야의 IT 전문 기업" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1440px] h-[4496px] relative">
          <div className="absolute w-[1451px] h-[3228px] top-[114px] left-0">
            <div className="absolute w-[1440px] h-[2656px] top-[572px] left-0 bg-[linear-gradient(146deg,rgba(246,246,246,1)_1%,rgba(255,255,255,1)_100%)]" />

            <div className="absolute w-[1440px] h-[1058px] top-[1983px] left-[11px] blur-[8.7px] [background:conic-gradient(from_238deg_at_220%_86%,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_45%,rgba(248,195,226,1)_50%,rgba(4,170,171,1)_76%,rgba(255,255,255,1)_97%)]" />

            <div className="absolute w-[1440px] h-[590px] top-0 left-0 bg-[#f6f8fa]" />

            <p className="absolute top-[139px] left-[115px] [-webkit-text-stroke:1px_#000000] [font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold text-transparent text-4xl tracking-[0] leading-[60px]">
              <span className="text-[#545e5e]">
                블록체인의 미래, <br />
              </span>

              <span className="text-[#00b2ae]">
                (주)맥스피아아이시티가 만들어 갑니다.&nbsp;&nbsp;
              </span>
            </p>

            <div className="absolute top-[253px] left-[60px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-5xl tracking-[-0.48px] leading-[67.2px] whitespace-nowrap">
              {""}
            </div>

            <div className="absolute w-[424px] top-[2131px] left-[127px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#635d5d] text-[32px] tracking-[0] leading-[normal]">
              맞춤형 솔루션을 찾아보세요.
            </div>

            <p className="absolute w-[453px] top-[2185px] left-[127px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#635d5d] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              귀사의 블록체인 비즈니스 성장을 위한 최적의 솔루션을 제공합니다.
            </p>

            {primaryTabs.map((tab, index) => (
              <div
                key={index}
                className={`absolute w-[132px] h-[50px] top-[2260px] left-[${127 + index * 151}px] ${
                  tab.active
                    ? "bg-[#04aaab] shadow-[inset_9px_11px_17.2px_-13px_#00000040]"
                    : "bg-white border border-solid border-[#cdd3d3] shadow-[-1px_1px_16.4px_-3px_#00000040]"
                } rounded-[11px]`}
              >
                <div
                  className={`absolute top-[14px] left-[${tab.active ? "37" : "15"}px] [font-family:'Pretendard-${tab.active ? "Black" : "ExtraBold"}',Helvetica] font-${tab.active ? "black" : "extrabold"} ${tab.active ? "text-white" : "text-[#474747]"} text-base tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {tab.label}
                </div>
              </div>
            ))}

            {features.map((feature, index) => (
              <div key={index}>
                <div
                  className={`absolute top-[1435px] left-[${132 + index * 393}px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#524848] text-xl ${index < 2 ? "text-center" : ""} tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {feature.title}
                </div>
                <p
                  className={`absolute ${index === 0 ? "top-[1475px] left-[132px]" : index === 1 ? "w-[391px] top-[1475px] left-[525px]" : "w-[391px] top-[1475px] left-[923px]"} [font-family:'Pretendard-Medium',Helvetica] font-${index === 1 ? "normal" : "medium"} text-[#534848] text-base tracking-[0] leading-${index === 0 ? "4" : "[25px]"}`}
                >
                  {feature.description.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < feature.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}

            {additionalFeatures.map((feature, index) => (
              <div key={index}>
                <div
                  className={`absolute top-[1782px] left-[${index === 0 ? "126" : index === 1 ? "525" : "923"}px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#${index === 0 ? "534848" : "524848"}] text-xl ${index < 2 ? "text-center" : ""} tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {feature.title}
                </div>
                <p
                  className={`absolute ${index === 0 ? "top-[1822px] left-[132px]" : index === 1 ? "w-[391px] top-[1822px] left-[525px]" : "w-[391px] top-[1822px] left-[923px]"} ${index === 2 ? "font-text-111 font-[number:var(--text-111-font-weight)] text-[length:var(--text-111-font-size)] tracking-[var(--text-111-letter-spacing)] leading-[var(--text-111-line-height)] [font-style:var(--text-111-font-style)]" : "[font-family:'Pretendard-Medium',Helvetica] font-medium"} text-[#534848] text-base tracking-[0] leading-[normal]`}
                >
                  {feature.description.split('\n').map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < feature.description.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}

            <div className="absolute w-[1440px] h-[362px] top-[817px] left-0 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_16%,rgba(243,240,240,0.2)_100%)]" />

            <p className="absolute w-[990px] top-[897px] left-[127px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#4c4949] text-4xl tracking-[0] leading-[61.2px]">
              <span className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#4c4949] text-4xl tracking-[0] leading-[61.2px]">
                (주)맥스피아아이시티는 2016년 설립 이후,
                <br />
              </span>

              <span className="text-xl leading-[34.0px]">
                {" "}
                <br />
                블록체인 기반 금융 솔루션, 가상 서버 운영, 암호화폐 채굴 등 다양한
                분야에서 꾸준히 성장해온 IT 전문 기업입니다. <br />
                체계적인 시스템 통합 운영과 차별화된 기술력, 안정적인 채굴
                인프라를 기반으로 고객 중심의 블록체인 서비스를 제공합니다. <br />
                퀀텀체인(QCC)을 비롯한 다양한 프로젝트를 통해 글로벌 블록체인
                생태계의 지속 가능한 미래를 이끌어갑니다. <br /> <br />
              </span>
            </p>

            <div className="absolute top-[580px] left-[1141px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              바로가기
            </div>

            <div className="absolute top-[564px] left-[1204px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-4xl tracking-[0] leading-[normal] whitespace-nowrap">
              →
            </div>

            <div className="absolute w-[424px] top-[3146px] left-[113px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#4c4949] text-[32px] text-center tracking-[0] leading-[normal]">
              지금 바로 문의하세요
            </div>

            {solutionCards.map((card, index) => (
              <div
                key={index}
                className={`absolute w-[387px] h-[352px] top-[2445px] left-[${127 + index * 427}px] rounded-2xl shadow-[9px_11px_17.2px_-13px_#00000040] ${
                  index === 0
                    ? "[background:conic-gradient(from_90deg_at_-6%_50%,rgba(238,238,238,1)_0%,rgba(255,255,255,1)_100%)]"
                    : index === 1
                      ? "[background:conic-gradient(from_90deg_at_-6%_50%,rgba(238,238,238,1)_0%,rgba(255,255,255,0.73)_100%)]"
                      : "bg-[linear-gradient(90deg,rgba(238,238,238,1)_0%,rgba(255,255,255,0)_100%)]"
                }`}
              >
                <div className="absolute top-[135px] left-[35px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#524b4b] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {card.title}
                </div>
                <div className="absolute top-[182px] left-[35px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#524b4b] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {card.description.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      {lineIndex < card.description.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </div>
                <div
                  className={`absolute w-[357px] h-[50px] top-[278px] left-[15px] ${
                    card.buttonStyle === "primary"
                      ? "bg-[#04aaab]"
                      : index === 1
                        ? "bg-[#fefefe]"
                        : "bg-[linear-gradient(90deg,rgba(254,254,254,1)_0%,rgba(255,255,255,0)_100%)]"
                  } rounded-[11px] shadow-[9px_11px_17.2px_-13px_#00000040]`}
                >
                  <div
                    className={`absolute top-[14px] left-[15px] [font-family:'Pretendard-${card.buttonStyle === "primary" ? "ExtraBold" : "Bold"}',Helvetica] font-${card.buttonStyle === "primary" ? "extrabold" : "bold"} ${card.buttonStyle === "primary" ? "text-white" : "text-[#474747]"} text-base tracking-[0] leading-[normal] whitespace-nowrap`}
                  >
                    {card.buttonText}
                  </div>
                  <div
                    className={`absolute top-[14px] right-[15px] [font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold ${card.buttonStyle === "primary" ? "text-white" : "text-[#474747]"} text-base tracking-[0] leading-[normal] whitespace-nowrap`}
                  >
                    →
                  </div>
                </div>
              </div>
            ))}

            {secondaryTabs.map((tab, index) => (
              <div
                key={index}
                className="absolute w-[132px] h-[50px] top-[2335px] left-[${127 + index * 151}px] bg-white rounded-[11px] border border-solid border-[#cdd3d3] shadow-[-1px_1px_16.4px_-3px_#00000040]"
              >
                <div className="absolute top-[14px] left-[${index === 4 ? '21' : '15'}px] [font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold text-[#474747] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {tab.label}
                </div>
              </div>
            ))}

            <div className="absolute w-[187px] h-[1161px] top-[1963px] left-[1264px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_20%,rgba(255,255,255,0.87)_49%,rgba(255,255,255,1)_100%)]" />

            <div className="absolute w-14 h-14 top-[2461px] left-[1301px] bg-[#04aaab] rounded-lg shadow-[0px_4px_10.6px_-4px_#00000040]" />
          </div>

          <nav
            className="absolute w-[522px] h-[19px] top-[53px] left-[860px]"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`absolute top-0 left-[${index === 0 ? "0" : index === 1 ? "78" : index === 2 ? "159" : index === 3 ? "264" : index === 4 ? "335" : "449"}px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#00b2ae] transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="top-[390px] left-[1814px] rotate-180 [font-family:'Inter-Regular',Helvetica] font-normal text-black text-5xl tracking-[-0.48px] leading-[67.2px] absolute whitespace-nowrap">
            &lt;
          </div>

          <div className="absolute w-[424px] h-[653px] top-[2650px] left-[1708px] bg-[#d9d9d9]">
            <div className="absolute top-[514px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
              회사 소개
              <br />더 알아보기&nbsp;&nbsp;&gt;&gt;&gt;
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="absolute w-[1079px] h-[542px] top-[3356px] left-[186px]"
          >
            <div className="absolute w-[524px] h-20 top-0 left-0">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름*"
                required
                className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[39px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8] focus:outline-none focus:border-[#04aaab] focus:text-black"
              />
            </div>

            <div className="absolute w-[524px] h-20 top-[101px] left-0">
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="직책*"
                required
                className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[39px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8] focus:outline-none focus:border-[#04aaab] focus:text-black"
              />
            </div>

            <div className="absolute w-[1069px] h-[345px] top-[197px] left-0">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="문의내용*"
                required
                className="absolute w-[1069px] h-[345px] top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[33px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl tracking-[0] leading-[normal] placeholder:text-[#ada8a8] focus:outline-none focus:border-[#04aaab] focus:text-black resize-none"
              />
            </div>

            <div className="absolute w-[524px] h-20 top-0 left-[545px]">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="회사명*"
                required
                className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[30px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8] focus:outline-none focus:border-[#04aaab] focus:text-black"
              />
            </div>

            <div className="absolute w-[524px] h-20 top-[101px] left-[545px]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="회사이메일*"
                required
                className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[30px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8] focus:outline-none focus:border-[#04aaab] focus:text-black"
              />
            </div>
          </form>

          <button
            type="submit"
            className="absolute w-[271px] h-[57px] top-[3939px] left-[592px] bg-[#04aaab] rounded-[13px] hover:bg-[#038a8b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#04aaab] focus:ring-offset-2"
          >
            <div className="absolute w-[100px] top-3.5 left-[86px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
              문의하기
            </div>
          </button>

          <footer
            className="absolute w-[1445px] h-[310px] top-[4186px] left-0 bg-[#f6f6f6]"
            role="contentinfo"
          >
            <div className="absolute top-10 left-[670px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#494242] text-[13px] text-center tracking-[0] leading-[normal]">
              서비스
            </div>

            <div className="absolute top-10 left-[852px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#494242] text-[13px] tracking-[0] leading-[normal]">
              회사
            </div>

            <div className="absolute top-10 left-[1025px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#494242] text-[13px] tracking-[0] leading-[normal]">
              연락처
            </div>

            {footerCompany.map((item, index) => (
              <div
                key={index}
                className={`absolute top-[${72 + index * 30}px] left-[852px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                {item.label}
              </div>
            ))}

            <p className="absolute top-[72px] left-[1039px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              경기도 광주시 도척면 도척윗로 452
            </p>

            {footerServices.map((item, index) => (
              <div
                key={index}
                className={`absolute top-[${72 + index * 30}px] left-[670px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                {item.label}
              </div>
            ))}

            <div className="absolute top-[88px] left-[122px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              (주)맥스피아아이시티
            </div>

            <div className="top-[120px] left-[122px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              사업자번호: 315-88-01758
            </div>

            <div className="absolute top-[88px] left-64 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              대표이사 임세택
            </div>

            <div className="absolute top-[255px] left-[578px] [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-[13px] text-center tracking-[0] leading-[normal]">
              © 2024 (주)맥스피아아이시티. All rights reserved.
            </div>

            <div className="absolute w-[139px] h-[25px] top-[37px] left-[100px] shadow-[inset_0px_4px_4px_#00000040]" />

            <div className="absolute w-5 h-5 top-[154px] left-[150px] bg-[url(/vector.svg)] bg-[100%_100%]" />

            <div className="absolute w-[103px] h-3.5 top-[102px] left-[1016px]">
              <div className="top-0 left-[23px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                070.4157.1666
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
} 