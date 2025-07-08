import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { mkdirSync, existsSync } from 'fs';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, error: 'No file found' });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 'public/uploads' 디렉토리 확인 및 생성
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
  }

  // 파일명에 타임스탬프를 추가하여 중복 방지
  const timestamp = Date.now();
  const filename = `${timestamp}_${file.name}`;
  const path = join(uploadDir, filename);

  await writeFile(path, buffer);
  console.log(`File uploaded to ${path}`);

  // 클라이언트에서 접근할 수 있는 URL 경로 반환
  const url = `/uploads/${filename}`;

  return NextResponse.json({ success: true, url: url });
} 