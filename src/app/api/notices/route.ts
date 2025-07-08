import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// 공지사항 조회 (GET)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const skip = (page - 1) * limit;

  try {
    const [notices, totalCount] = await prisma.$transaction([
      prisma.notice.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.notice.count(),
    ]);

    return NextResponse.json({ notices, totalCount });
  } catch (error) {
    console.error('공지사항 조회 중 오류:', error);
    return NextResponse.json(
      { error: '공지사항 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 공지사항 생성 (POST)
export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();

    if (!title || !content) {
      return NextResponse.json(
        { error: '제목과 내용을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    const notice = await prisma.notice.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(notice, { status: 201 });
  } catch (error) {
    console.error('공지사항 생성 중 오류:', error);
    return NextResponse.json(
      { error: '공지사항 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 