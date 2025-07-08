import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// 공지사항 조회 (GET)
export async function GET() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(notices);
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