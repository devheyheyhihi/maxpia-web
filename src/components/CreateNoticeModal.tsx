"use client"

import { useRef, useEffect, useState } from 'react';
import TiptapEditor from './TiptapEditor'; // Tiptap 에디터로 교체

interface CreateNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateNoticeModal({ isOpen, onClose }: CreateNoticeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // 에디터 내용을 위한 state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      // 모달 열릴 때 내용 초기화
      setTitle('');
      setContent('');
      setError('');
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/notices', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
        }),
      });

      if (response.ok) {
        setTitle('');
        setContent('');
        onClose();
      } else {
        const errorData = await response.json();
        setError(errorData.error || '공지사항 저장 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setError('공지사항 저장 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setTitle('');
    setContent('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        <h2 className="text-2xl font-bold mb-6">공지사항 작성</h2>
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow overflow-hidden">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#04AAAB]"
              required
              maxLength={100}
            />
          </div>
          <div className="mb-4 flex-grow flex flex-col overflow-hidden">
            <label className="block text-sm font-semibold text-gray-700 mb-2">내용</label>
            <div className="flex-grow overflow-hidden border rounded-md">
              <TiptapEditor content={content} onChange={setContent} />
            </div>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <div className="flex justify-end gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              disabled={isSubmitting}
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#04AAAB] text-white rounded-md hover:bg-[#038A8A] disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? '저장 중...' : '저장'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 