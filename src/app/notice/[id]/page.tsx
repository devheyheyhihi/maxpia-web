import Header from '@/components/Header';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import '@/components/Tiptap.css'; // 에디터의 CSS 파일을 불러옵니다.

interface NoticeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getNotice(id: string) {
  // id가 숫자가 아니거나 유효하지 않은 경우를 대비합니다.
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    notFound();
  }

  const notice = await prisma.notice.findUnique({
    where: { id: numericId },
  });

  // 해당 ID의 공지사항이 없으면 404 페이지를 보여줍니다.
  if (!notice) {
    notFound();
  }

  return notice;
}


export default async function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { id } = await params;
  const notice = await getNotice(id);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
          {/* 헤더 */}
          <div className="border-b-2 border-gray-200 pb-6 mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{notice.title}</h1>
            <p className="text-sm text-gray-500 mt-3">
              게시일: {new Date(notice.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* 본문 (HTML 렌더링) */}
          <div
            className="ProseMirror max-w-none" // ProseMirror 클래스를 추가하여 스타일을 적용합니다.
            dangerouslySetInnerHTML={{ __html: notice.content || '' }}
          />
        </div>
      </main>
    </div>
  );
} 