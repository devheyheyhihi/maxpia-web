import Image from 'next/image'
import React from 'react'

export default function Footer() {
  const services = [
    {
      title: '퀀텀체인(QCC)',
      url: '/qcc'
    },{
      title: '가상 서버',
      url: '/solutioin'
    }
  ]
  const company = [
    {
      title: '회사 소개',
      url: '/about'
    },{
      title: '채용 정보',
      url: '/contact'
    },{
      title: '뉴스',
      url: '/contact'
    }
  ]
  return (
    <footer className="bg-gray-100 pt-12">
      <div className="container mx-auto px-4 grid md:grid-cols-10 gap-10">
        {/* Logo & Company Info */}
        <div className="md:col-span-3">
          <Image src="/footer_logo.png" alt="맥스피아 ICT&TEC" width={160} height={40} className="mb-4" />
          <p className="text-sm text-gray-700 mb-1">(주)맥스피아아이시티 &nbsp;|&nbsp; 대표이사 임세택</p>
          <p className="text-sm text-gray-700 mb-4">사업자번호: 315-88-01758</p>
        </div>

        {/* Service Links */}
        <div className="md:col-span-2">
          <h4 className="font-semibold text-gray-900 mb-4">서비스</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {services.map((item) => (
              <li key={item.title}><a href={item.url} className="hover:text-[#04AAAB]">{item.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="md:col-span-2">
          <h4 className="font-semibold text-gray-900 mb-4">회사</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {company.map((item) => (
              <li key={item.title}><a href={item.url} className="hover:text-[#04AAAB]">{item.title}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="font-semibold text-gray-900 mb-4 pl-2">연락처</h4>
          <div className="flex items-center text-sm text-gray-700 mb-2">
            <Image src="/icon_location.png" alt="주소" width={16} height={16} className="mr-2" />
            경기도 광주시 도척면 도척윗로 452
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Image src="/icon_phone.png" alt="전화" width={16} height={16} className="mr-2" />
            070.4157.1666
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="container mx-auto px-4 mt-12 pb-8">
        <hr className="border-gray-300 mb-6" />
        <p className="text-center text-sm text-gray-500">© 2024 (주)맥스피아아이시티. All rights reserved.</p>
      </div>
    </footer>
  )
} 