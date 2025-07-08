"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createNotice(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!title || !content) {
    throw new Error('제목과 내용은 필수입니다.');
  }

  try {
    await prisma.notice.create({
      data: {
        title,
        content,
      },
    });

    // 데이터가 변경되었으므로, contact 페이지의 캐시를 무효화하여 새로고침합니다.
    revalidatePath('/contact');

    return { success: true };

  } catch (error) {
    console.error(error);
    return { success: false, error: "공지사항 생성에 실패했습니다." };
  }
} 