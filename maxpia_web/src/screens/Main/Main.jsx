import React, { useState } from "react";

export const Main = () => {
  // Navigation data
  const navigationItems = [
    { label: "home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "QCC", href: "#qcc" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  // Main navigation buttons data
  const mainNavButtons = [
    { label: "회사 소개", active: true },
    { label: "솔루션", active: false },
    { label: "채굴서비스", active: false },
    { label: "프로젝트", active: false },
    { label: "QCC", active: false },
  ];

  // Secondary navigation buttons data
  const secondaryNavButtons = [
    { label: "상담 신청하기" },
    { label: "컨설팅 받기" },
    { label: "투자 및 협업" },
    { label: "기술 백서" },
    { label: "연락처 및 위치" },
  ];

  // Features data
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

  // Service cards data
  const serviceCards = [
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

  // Footer services data
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

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    position: "",
    email: "",
    message: "",
  });

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
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1146:3"
    >
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

          <div className="absolute top-[253px] left-[60px] [font-family:'Inter',Helvetica] font-normal text-black text-5xl tracking-[-0.48px] leading-[67.2px] whitespace-nowrap">
            {""}
          </div>

          <div className="absolute w-[424px] top-[2131px] left-[127px] [font-family:'Inter',Helvetica] font-extrabold text-[#635d5d] text-[32px] tracking-[0] leading-[normal]">
            맞춤형 솔루션을 찾아보세요.
          </div>

          <p className="absolute w-[453px] top-[2185px] left-[127px] [font-family:'Inter',Helvetica] font-extrabold text-[#635d5d] text-base tracking-[0] leading-[normal] whitespace-nowrap">
            귀사의 블록체인 비즈니스 성장을 위한 최적의 솔루션을 제공합니다.
          </p>

          {/* Main Navigation Buttons */}
          <div className="absolute top-[2260px] left-[127px] flex gap-[19px]">
            {mainNavButtons.map((button, index) => (
              <button
                key={index}
                className={`w-[132px] h-[50px] rounded-[11px] ${
                  button.active
                    ? "bg-[#04aaab] shadow-[inset_9px_11px_17.2px_-13px_#00000040]"
                    : "bg-white border border-solid border-[#cdd3d3] shadow-[-1px_1px_16.4px_-3px_#00000040]"
                }`}
              >
                <span
                  className={`[font-family:'Pretendard-Black',Helvetica] font-black text-base tracking-[0] leading-[normal] whitespace-nowrap ${
                    button.active
                      ? "text-white"
                      : "text-[#474747] [font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold"
                  }`}
                >
                  {button.label}
                </span>
              </button>
            ))}
          </div>

          {/* Features Section */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute top-[1435px] ${index === 0 ? "left-[132px]" : index === 1 ? "left-[525px]" : "left-[923px]"}`}
            >
              <div
                className={`[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#524848] text-xl tracking-[0] leading-[normal] ${index === 0 || index === 1 ? "text-center" : ""} whitespace-nowrap`}
              >
                {feature.title}
              </div>
              <p
                className={`mt-10 [font-family:'Pretendard-Medium',Helvetica] font-normal text-[#534848] text-base tracking-[0] ${index === 0 ? "leading-4" : "leading-[25px]"} ${index === 0 ? "font-medium" : index === 2 ? "font-medium" : ""} ${index === 1 ? "w-[391px]" : index === 2 ? "w-[391px]" : ""}`}
              >
                {feature.description.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < feature.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
                {index === 0 && (
                  <span className="[font-family:'Inter',Helvetica] text-xs">
                    &nbsp;
                  </span>
                )}
                {index === 1 && (
                  <span className="[font-family:'Inter',Helvetica]">제공 </span>
                )}
              </p>
            </div>
          ))}

          {/* Additional Features Section */}
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className={`absolute top-[1782px] ${index === 0 ? "left-[126px]" : index === 1 ? "left-[525px]" : "left-[923px]"}`}
            >
              <div
                className={`[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#534848] text-xl tracking-[0] leading-[normal] ${index === 0 || index === 1 ? "text-center" : ""} whitespace-nowrap`}
              >
                {feature.title}
              </div>
              <p
                className={`mt-10 [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#534848] text-base tracking-[0] leading-[normal] ${index === 1 || index === 2 ? "w-[391px]" : ""} ${index === 2 ? "font-text-111 font-[number:var(--text-111-font-weight)] text-[length:var(--text-111-font-size)] tracking-[var(--text-111-letter-spacing)] leading-[var(--text-111-line-height)] [font-style:var(--text-111-font-style)]" : ""}`}
              >
                {feature.description.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < feature.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
                {index === 2 && <span>&amp;</span>}
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

          <div className="absolute w-[424px] top-[3146px] left-[113px] [font-family:'Inter',Helvetica] font-extrabold text-[#4c4949] text-[32px] text-center tracking-[0] leading-[normal]">
            지금 바로 문의하세요
          </div>

          {/* Service Cards */}
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-[387px] h-[352px] top-[2445px] ${index === 0 ? "left-[127px]" : index === 1 ? "left-[554px]" : "left-[981px]"} rounded-2xl shadow-[9px_11px_17.2px_-13px_#00000040] ${
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
              <p className="absolute top-[202px] left-[35px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#524b4b] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                {card.description.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < card.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </p>
              <button
                className={`absolute w-[357px] h-[50px] top-[278px] left-[15px] rounded-[11px] shadow-[9px_11px_17.2px_-13px_#00000040] ${
                  card.buttonStyle === "primary"
                    ? "bg-[#04aaab]"
                    : index === 1
                      ? "bg-[#fefefe]"
                      : "bg-[linear-gradient(90deg,rgba(254,254,254,1)_0%,rgba(255,255,255,0)_100%)]"
                }`}
              >
                <span
                  className={`[font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold text-base tracking-[0] leading-[normal] whitespace-nowrap ${
                    card.buttonStyle === "primary"
                      ? "text-white"
                      : "text-[#474747] [font-family:'Pretendard-Bold',Helvetica] font-bold"
                  }`}
                >
                  {card.buttonText}
                </span>
                <span
                  className={`ml-2 [font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold text-base tracking-[0] leading-[normal] whitespace-nowrap ${
                    card.buttonStyle === "primary"
                      ? "text-white"
                      : "text-[#474747]"
                  }`}
                >
                  →
                </span>
              </button>
            </div>
          ))}

          {/* Secondary Navigation Buttons */}
          <div className="absolute top-[2335px] left-[127px] flex gap-[19px]">
            {secondaryNavButtons.map((button, index) => (
              <button
                key={index}
                className="w-[132px] h-[50px] bg-white rounded-[11px] border border-solid border-[#cdd3d3] shadow-[-1px_1px_16.4px_-3px_#00000040]"
              >
                <span className="[font-family:'Pretendard-ExtraBold',Helvetica] font-extrabold text-[#474747] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  {button.label}
                </span>
              </button>
            ))}
          </div>

          <div className="absolute w-[187px] h-[1161px] top-[1963px] left-[1264px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.6)_20%,rgba(255,255,255,0.87)_49%,rgba(255,255,255,1)_100%)]" />

          <div className="absolute w-14 h-14 top-[2461px] left-[1301px] bg-[#04aaab] rounded-lg shadow-[0px_4px_10.6px_-4px_#00000040]" />

          <img
            className="absolute w-[11px] h-5 top-[2479px] left-[1324px]"
            alt="Img"
            src="https://c.animaapp.com/7UcXA913/img/-.svg"
          />
        </div>

        {/* Navigation */}
        <nav className="absolute w-[522px] h-[19px] top-[53px] left-[860px]">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`absolute top-0 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap ${
                index === 0
                  ? "left-0"
                  : index === 1
                    ? "left-[78px]"
                    : index === 2
                      ? "left-[159px]"
                      : index === 3
                        ? "left-[264px]"
                        : index === 4
                          ? "left-[335px]"
                          : "left-[449px]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="top-[390px] left-[1814px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-black text-5xl tracking-[-0.48px] leading-[67.2px] absolute whitespace-nowrap">
          <
        </div>

        <div className="absolute w-[424px] h-[653px] top-[2650px] left-[1708px] bg-[#d9d9d9]">
          <div className="absolute top-[514px] left-[42px] [font-family:'Inter',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
            회사 소개
            <br />더 알아보기&nbsp;&nbsp;>&gt;&gt;
          </div>
        </div>

        <img
          className="absolute w-[358px] h-[146px] top-[53820px] left-[57490px]"
          alt="Rectangle"
          src="https://c.animaapp.com/7UcXA913/img/rectangle-2.png"
        />

        {/* Contact Form */}
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
              className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[39px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8]"
              required
            />
          </div>

          <div className="absolute w-[524px] h-20 top-[101px] left-0">
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="직책*"
              className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[39px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8]"
              required
            />
          </div>

          <div className="absolute w-[1069px] h-[345px] top-[197px] left-0">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="문의내용*"
              className="absolute w-[1069px] h-[345px] top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[33px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8] resize-none"
              required
            />
          </div>

          <div className="absolute w-[524px] h-20 top-0 left-[545px]">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="회사명*"
              className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[30px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8]"
              required
            />
          </div>

          <div className="absolute w-[524px] h-20 top-[101px] left-[545px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="회사이메일*"
              className="absolute w-[524px] h-20 top-0 left-0 bg-[#f6f7f8] border border-solid border-[#d7dddf] opacity-[0.92] px-[30px] py-7 [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#ada8a8] text-xl text-center tracking-[0] leading-[normal] placeholder:text-[#ada8a8]"
              required
            />
          </div>
        </form>

        <button
          type="submit"
          className="absolute w-[271px] h-[57px] top-[3939px] left-[592px] bg-[#04aaab] rounded-[13px]"
          onClick={handleSubmit}
        >
          <span className="absolute w-[100px] top-3.5 left-[86px] [font-family:'Inter',Helvetica] font-extrabold text-white text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            문의하기
          </span>
        </button>

        {/* Footer */}
        <footer className="absolute w-[1445px] h-[310px] top-[4186px] left-0 bg-[#f6f6f6]">
          <div className="absolute top-10 left-[670px] [font-family:'Inter',Helvetica] font-extrabold text-[#494242] text-[13px] text-center tracking-[0] leading-[normal]">
            서비스
          </div>

          <div className="absolute top-10 left-[852px] [font-family:'Inter',Helvetica] font-extrabold text-[#494242] text-[13px] tracking-[0] leading-[normal]">
            회사
          </div>

          <div className="absolute top-10 left-[1025px] [font-family:'Inter',Helvetica] font-extrabold text-[#494242] text-[13px] tracking-[0] leading-[normal]">
            연락처
          </div>

          {/* Footer Services */}
          {footerServices.map((service, index) => (
            <a
              key={index}
              href="#"
              className={`absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap ${
                index === 0
                  ? "top-[72px] left-[670px]"
                  : index === 1
                    ? "top-[102px] left-[670px]"
                    : index === 2
                      ? "top-[132px] left-[670px]"
                      : "top-[162px] left-[670px]"
              }`}
            >
              {service.label}
            </a>
          ))}

          {/* Footer Company */}
          {footerCompany.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap ${
                index === 0
                  ? "top-[72px] left-[852px]"
                  : index === 1
                    ? "top-[101px] left-[852px]"
                    : index === 2
                      ? "top-[132px] left-[852px]"
                      : "top-[162px] left-[852px]"
              }`}
            >
              {item.label}
            </a>
          ))}

          <p className="absolute top-[72px] left-[1039px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            경기도 광주시 도척면 도척윗로 452
          </p>

          <div className="absolute top-[88px] left-[122px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            (주)맥스피아아이시티
          </div>

          <div
            className="
top-[120px] left-[122px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap"
          >
            사업자번호: 315-88-01758
          </div>

          <div className="absolute top-[88px] left-64 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            대표이사 임세택
          </div>

          <img
            className="w-[1248px] h-px top-56 left-24 absolute object-cover"
            alt="Line"
            src="https://c.animaapp.com/7UcXA913/img/line-6.svg"
          />

          <p className="absolute top-[255px] left-[578px] [font-family:'Inter',Helvetica] font-extralight text-black text-[13px] text-center tracking-[0] leading-[normal]">
            © 2024 (주)맥스피아아이시티. All rights reserved.
          </p>

          <img
            className="absolute w-4 h-4 top-[71px] left-[1015px]"
            alt="Frame"
            src="https://c.animaapp.com/7UcXA913/img/frame.svg"
          />

          <div className="absolute w-[139px] h-[25px] top-[37px] left-[100px] shadow-[inset_0px_4px_4px_#00000040]" />

          <img
            className="w-px h-[13px] top-[89px] left-60 absolute object-cover"
            alt="Line"
            src="https://c.animaapp.com/7UcXA913/img/line-7.svg"
          />

          <div className="absolute w-5 h-5 top-[154px] left-[150px] bg-[url(https://c.animaapp.com/7UcXA913/img/vector.svg)] bg-[100%_100%]">
            <img
              className="absolute w-3.5 h-3 top-1 left-0.5"
              alt="Group"
              src="https://c.animaapp.com/7UcXA913/img/group@2x.png"
            />
          </div>

          <img
            className="absolute w-5 h-5 top-[154px] left-[178px]"
            alt="Discord logo"
            src="https://c.animaapp.com/7UcXA913/img/discord-logo.svg"
          />

          <img
            className="absolute w-5 h-5 top-[154px] left-[207px]"
            alt="Element"
            src="https://c.animaapp.com/7UcXA913/img/--------1.svg"
          />

          <div className="absolute w-[103px] h-3.5 top-[102px] left-[1016px]">
            <div className="top-0 left-[23px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#484141] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              070.4157.1666
            </div>

            <img
              className="absolute w-3.5 h-3.5 top-0 left-0"
              alt="Layer"
              src="https://c.animaapp.com/7UcXA913/img/layer-1.svg"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};
