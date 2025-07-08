"use client"

import { useState, useRef, useEffect } from 'react';

interface PasswordCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const CORRECT_PASSWORD = 'aortmvldkict';

export default function PasswordCheckModal({ isOpen, onClose, onSuccess }: PasswordCheckModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 모달이 열릴 때 초기화
    if (isOpen) {
      setPassword('');
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onSuccess();
    } else {
      setError('비밀번호가 일치하지 않습니다.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">관리자 확인</h2>
        <p className="text-sm text-gray-600 mb-6">글을 작성하려면 비밀번호를 입력하세요.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#04AAAB]"
              required
              autoFocus
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#04AAAB] text-white rounded-md hover:bg-[#038A8A]"
            >
              확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 