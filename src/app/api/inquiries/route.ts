import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// 문의 저장 (POST)
export async function POST(request: NextRequest) {
  try {
    const { name, company, title, email, message } = await request.json();

    // 필수 필드 검증
    if (!name || !company || !title || !email || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 데이터베이스에 저장
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        company,
        title,
        email,
        message,
        status: 'pending', // 기본값으로 pending 설정
      },
    });

    return NextResponse.json(
      { message: '문의가 성공적으로 저장되었습니다.', id: inquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('문의 저장 중 오류:', error);
    return NextResponse.json(
      { error: '문의 저장 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 문의 조회 (GET)
export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('문의 조회 중 오류:', error);
    return NextResponse.json(
      { error: '문의 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// 문의 상태 업데이트 (PUT)
export async function PUT(request: NextRequest) {
  try {
    const { id, status } = await request.json();

    // 필수 필드 검증
    if (!id || !status) {
      return NextResponse.json(
        { error: '문의 ID와 상태를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 유효한 상태 값 검증
    if (!['pending', 'completed'].includes(status)) {
      return NextResponse.json(
        { error: '유효하지 않은 상태 값입니다.' },
        { status: 400 }
      );
    }

    // 데이터베이스에서 상태 업데이트
    const inquiry = await prisma.inquiry.update({
      where: { id: parseInt(id) },
      data: { 
        status,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: '문의 상태가 성공적으로 업데이트되었습니다.', inquiry },
      { status: 200 }
    );
  } catch (error) {
    console.error('문의 상태 업데이트 중 오류:', error);
    return NextResponse.json(
      { error: '문의 상태 업데이트 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
} 