"use client"

import { useState } from 'react';

export default function FaqSection() {
  const faqs = [
    { q: '서비스 이용 방법은 어떻게 되나요?', a: '회원가입 후 원하는 서비스를 선택하여 신청하시면 됩니다. 자세한 절차는 안내 문서를 참고하세요.' },
    { q: '비밀번호를 잊어버렸어요.', a: '로그인 페이지의 "비밀번호 찾기" 기능을 이용해 주세요.' },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#04AAAB] py-20 px-4 overflow-y-auto" style={{ height: '50vh' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-white text-3xl font-semibold text-center mb-12">자주 묻는 질문 (FAQ)</h2>
        {faqs.map((item, idx) => (
          <div key={idx} className="mb-4">
            <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between bg-white text-gray-800 rounded-md py-4 px-6 shadow focus:outline-none text-left">
              <span className="text-sm md:text-base font-medium">Q. {item.q}</span>
              <span className={`transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div className="relative">
                <div className={`absolute left-0 top-[-4] w-full bg-white rounded-b-md shadow px-6 pt-4 pb-6 text-sm text-gray-600 transition-all duration-300 transform ${openIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>A. {item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 