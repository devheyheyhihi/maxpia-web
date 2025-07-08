"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type HeaderProps = {
  transparent?: boolean
}

export default function Header({ transparent = false }: HeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: '회사소개' },
    { href: '/solutions', label: '솔루션' },
    { href: '/qcc', label: 'QCC' },
    { href: '/contact', label: '고객지원' },
  ]

  return (
    <header className={`${transparent ? 'bg-transparent shadow-none' : 'bg-white shadow-md'} transition-colors`}>
      <nav className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={transparent ? '/header_logo_white.png' : '/header_logo.png'}
              alt="맥스피아아이시티 로고"
              width={100}
              height={50}
              className="h-auto w-full"
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? pathname === link.href
                : pathname.startsWith(link.href);
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? 'text-[#04AAAB] font-semibold'
                      : `${transparent ? 'text-white' : 'text-gray-700'} hover:text-[#04AAAB]`
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
} 