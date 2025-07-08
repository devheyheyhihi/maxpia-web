import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '맥스피아아이시티 - 블록체인 기반 금융 솔루션',
  description: '2016년부터 축적된 전문성으로 안전하고 효율적인 암호화폐 채굴 및 블록체인 서비스를 제공합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link 
          rel="stylesheet" 
          as="style" 
          crossOrigin="" 
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
} 