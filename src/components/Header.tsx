import Link from 'next/link'
import Image from 'next/image'

type HeaderProps = {
  transparent?: boolean
}

export default function Header({ transparent = false }: HeaderProps) {
  return (
    <header className={`${transparent ? 'bg-transparent shadow-none' : 'bg-white shadow-md'} transition-colors`}>
      <nav className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={transparent ? '/header_logo_white.png' : '/header_logo.png'}
              alt="맥스피아아이시티 로고"
              width={100}
              height={50}
              className="h-8 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${transparent ? 'text-white hover:text-[#04AAAB]' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${transparent ? 'text-white hover:text-[#04AAAB]' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              회사소개
            </Link>
            <Link href="/solutions" className={`${transparent ? 'text-white hover:text-[#04AAAB]' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              솔루션
            </Link>
            <Link href="/qcc" className={`${transparent ? 'text-white hover:text-[#04AAAB]' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              QCC
            </Link>
            <Link href="/contact" className={`${transparent ? 'text-white hover:text-[#04AAAB]' : 'text-gray-700 hover:text-blue-600'} transition-colors`}>
              고객지원
            </Link>
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