"use client"

import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import NoticeBoard from "@/components/NoticeBoard";
import CreateNoticeModal from "@/components/CreateNoticeModal";
import EditNoticeModal from "@/components/EditNoticeModal";
import { Notice } from '@/generated/prisma';

interface Inquiry {
  id: number;
  name: string;
  company: string;
  title: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const ADMIN_PASSWORD = 'aortmvldkict';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'notices'>('inquiries');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [totalNotices, setTotalNotices] = useState(0);
  const [currentNoticePage, setCurrentNoticePage] = useState(1);
  const noticesPerPage = 10;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries();
      fetchNotices(currentNoticePage);
    }
  }, [isAuthenticated, currentNoticePage]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('비밀번호가 일치하지 않습니다.');
    }
  };

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/inquiries');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      } else {
        setError('문의 데이터를 불러오는 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setError('문의 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const fetchNotices = async (page: number) => {
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
    }
  };

  const handleNoticePageChange = (page: number) => {
    setCurrentNoticePage(page);
  };
  
  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
    fetchNotices(currentNoticePage); // 공지사항 목록 새로고침
  };

  const handleEditNotice = (notice: Notice) => {
    setSelectedNotice(notice);
    setEditModalOpen(true);
  };

  const handleDeleteNotice = async (noticeId: number) => {
    try {
      const response = await fetch(`/api/notices/${noticeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchNotices(currentNoticePage); // 목록 새로고침
      } else {
        const errorData = await response.json();
        alert(errorData.error || '공지사항 삭제 중 오류가 발생했습니다.');
      }
    } catch (error) {
      alert('공지사항 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedNotice(null);
    fetchNotices(currentNoticePage); // 공지사항 목록 새로고침
  };

  const handleCompleteInquiry = async (inquiryId: number) => {
    try {
      const response = await fetch('/api/inquiries', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: inquiryId,
          status: 'completed',
        }),
      });

      if (response.ok) {
        fetchInquiries(); // 문의 목록 새로고침
      } else {
        const errorData = await response.json();
        alert(errorData.error || '문의 완료 처리 중 오류가 발생했습니다.');
      }
    } catch (error) {
      alert('문의 완료 처리 중 오류가 발생했습니다.');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR');
  };

  // 인증되지 않은 경우 로그인 화면 표시
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-bold text-center mb-6">관리자 로그인</h1>
              <p className="text-gray-600 text-center mb-8">관리자 페이지에 접근하려면 비밀번호를 입력하세요.</p>
              
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-6">
                  <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-2">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="admin-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#04AAAB] focus:border-transparent"
                    required
                    autoFocus
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#04AAAB] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#038A8A] transition-colors"
                >
                  로그인
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 인증된 경우 기존 관리자 페이지 표시
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">로딩 중...</div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center text-red-600">{error}</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">관리자 페이지</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              로그아웃
            </button>
          </div>
          
          {/* 탭 메뉴 */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'inquiries'
                  ? 'bg-[#04AAAB] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              문의 관리
            </button>
            <button
              onClick={() => setActiveTab('notices')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'notices'
                  ? 'bg-[#04AAAB] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              공지사항 관리
            </button>
          </div>

          {/* 문의 관리 탭 */}
          {activeTab === 'inquiries' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">문의 목록</h2>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-600">
                    총 {inquiries.length}건
                  </span>
                  <span className="text-orange-600">
                    대기 중: {inquiries.filter(inquiry => inquiry.status === 'pending').length}건
                  </span>
                  <span className="text-green-600">
                    완료: {inquiries.filter(inquiry => inquiry.status === 'completed').length}건
                  </span>
                </div>
              </div>

              {inquiries.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  아직 문의가 없습니다.
                </div>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div 
                      key={inquiry.id} 
                      className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
                        inquiry.status === 'completed' ? 'bg-green-50 border-green-200' : 'bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            inquiry.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {inquiry.status === 'completed' ? '완료' : '대기 중'}
                          </span>
                          <span className="text-sm text-gray-500">
                            ID: {inquiry.id}
                          </span>
                        </div>
                        {inquiry.status === 'pending' && (
                          <button
                            onClick={() => handleCompleteInquiry(inquiry.id)}
                            className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition-colors"
                          >
                            완료
                          </button>
                        )}
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="font-semibold text-gray-700">이름:</span>
                          <span className="ml-2">{inquiry.name}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">회사:</span>
                          <span className="ml-2">{inquiry.company}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">직책:</span>
                          <span className="ml-2">{inquiry.title}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">이메일:</span>
                          <span className="ml-2">{inquiry.email}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="font-semibold text-gray-700">문의 내용:</span>
                        <div className="mt-2 p-3 bg-gray-50 rounded-md">
                          <pre className="whitespace-pre-wrap text-sm">{inquiry.message}</pre>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        접수일: {formatDate(inquiry.createdAt)}
                        {inquiry.status === 'completed' && (
                          <span className="ml-4">
                            완료일: {formatDate(inquiry.updatedAt)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 공지사항 관리 탭 */}
          {activeTab === 'notices' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">공지사항 관리</h2>
                <button
                  onClick={() => setCreateModalOpen(true)}
                  className="bg-[#04AAAB] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#038A8A] transition-colors"
                >
                  공지사항 작성
                </button>
              </div>
              
              <NoticeBoard
                notices={notices}
                totalCount={totalNotices}
                itemsPerPage={noticesPerPage}
                currentPage={currentNoticePage}
                onPageChange={handleNoticePageChange}
                onEdit={handleEditNotice}
                onDelete={handleDeleteNotice}
                showActions={true}
              />
            </div>
          )}
        </div>
      </main>

      {/* 모달들 */}
      <CreateNoticeModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
      />
      <EditNoticeModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        notice={selectedNotice}
      />
    </div>
  );
} 