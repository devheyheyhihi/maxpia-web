"use client"

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';
import ReadOnlyNoticeBoard from '@/components/ReadOnlyNoticeBoard';
import FaqSection from '@/components/FaqSection';
import { Notice } from '@/generated/prisma';

export default function ContactPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [totalNotices, setTotalNotices] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices(currentPage);
  }, [currentPage]);

  const fetchNotices = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/notices?page=${page}&limit=${noticesPerPage}`);
      if (response.ok) {
        const data = await response.json();
        setNotices(data.notices);
        setTotalNotices(data.totalCount);
      } else {
        console.error('공지사항 데이터를 불러오는 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('공지사항 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* Hero Section */}
      <section className="h-[calc(screen/2)] py-24 flex flex-col items-center justify-center text-center px-4" style={{ background: 'linear-gradient(to top right, #ffffff 0%, #ffffff 70%, #B9B9B9 100%)' }}>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">고객지원 & 커뮤니티</h1>
        <p className="max-w-xl text-sm md:text-base text-gray-600 leading-relaxed my-12">
          궁금한 점이 있으신가요? 아래에서 도움을 받아보세요!
        </p>
      </section>

      {/* FAQ 섹션 */}
      <FaqSection />

      {/* 원격지원 안내 & 커뮤니티 */}
      <section className="px-4 my-20">
        <div className="max-w-3xl mx-auto">
          {/* 원격지원 안내 */}
          <h3 className="text-3xl font-extrabold text-gray-800 mb-8">원격지원 안내</h3>
          <p className="text-gray-700 font-semibold leading-relaxed mb-2">원격 지원이 필요하신 경우, <Link href="#" className="text-[#04AAAB] underline">여기</Link>를 클릭하여 안내를 확인해 주세요.</p>
          <p className="text-gray-700 font-semibold leading-relaxed">또는 고객센터로 연락해 주시면 빠르게 도와드리겠습니다.</p>

          {/* 커뮤니티 */}
          {/* <h3 className="text-3xl font-extrabold text-gray-800 mt-24 mb-8">커뮤니티</h3>
          <div className="flex gap-10">
            <Link href="#" className="block">
              <Image src="/icon_github.png" alt="GitHub" width={96} height={96} />
            </Link>
            <Link href="#" className="block">
              <Image src="/icon_telegram.png" alt="Telegram" width={96} height={96} />
            </Link>
            <Link href="#" className="block">
              <Image src="/icon_discord.png" alt="Discord" width={96} height={96} />
            </Link>
            <Link href="#" className="block">
              <Image src="/icon_blog.png" alt="Blog" width={96} height={96} />
            </Link>
          </div> */}
        </div>
      </section>

      {/* 공지사항 / 뉴스 게시판 (읽기 전용) */}
      {loading ? (
        <div className="text-center py-10">공지사항을 불러오는 중...</div>
      ) : (
        <ReadOnlyNoticeBoard 
          notices={notices}
          totalCount={totalNotices}
          itemsPerPage={noticesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
} 