"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Notice } from '@/generated/prisma';
import Link from 'next/link';

interface ReadOnlyNoticeBoardProps {
  notices: Notice[];
}

export default function ReadOnlyNoticeBoard({ notices }: ReadOnlyNoticeBoardProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative px-4 py-24">
      <div className="max-w-5xl mx-auto">
        {/* 탭 & 검색 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-8 text-lg font-semibold">
            {['공지사항', '뉴스'].map((t, i) => (
              <button 
                key={t} 
                onClick={() => setActiveTab(i)} 
                className={`${activeTab === i ? 'text-[#04AAAB]' : 'text-gray-500'} focus:outline-none`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden md:block">
              <input 
                type="text" 
                placeholder="검색" 
                className="w-full border rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#04AAAB]" 
              />
              <Image 
                src="/icon_search.png" 
                alt="검색" 
                width={16} 
                height={16} 
                className="absolute right-3 top-1/2 -translate-y-1/2" 
              />
            </div>
          </div>
        </div>

        {/* 공지사항 리스트 */}
        {activeTab === 0 && (
          <div className="border-t-2 border-gray-200">
            {notices.map((notice, idx) => (
              <div key={notice.id} className="grid grid-cols-12 text-sm py-4 border-b border-gray-100 hover:bg-gray-50 items-center">
                <div className="col-span-1 text-center text-gray-400">{notices.length - idx}</div>
                <div className="col-span-9 truncate px-2 text-gray-700">
                  <Link href={`/notice/${notice.id}`} className="hover:text-[#04AAAB]">
                    {notice.title}
                  </Link>
                </div>
                <div className="col-span-2 text-right text-gray-400 pr-4">
                  {new Date(notice.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
            {notices.length === 0 && (
              <div className="text-center py-10 text-gray-500">게시물이 없습니다.</div>
            )}
          </div>
        )}

        {/* 뉴스 탭 */}
        {activeTab === 1 && (
          <div className="border-t-2 border-gray-200">
            <div className="text-center py-10 text-gray-500">뉴스가 없습니다.</div>
          </div>
        )}
      </div>
    </section>
  );
} 