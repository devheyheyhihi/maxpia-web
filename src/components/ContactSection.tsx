"use client"

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    title: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('문의가 성공적으로 접수되었습니다.');
        setFormData({
          name: '',
          company: '',
          title: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitMessage(result.error || '문의 접수 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setSubmitMessage('문의 접수 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">문의하기</h2>
        <p className="text-center text-gray-600 mb-12">궁금한 점이 있으시면 언제든지 문의해 주세요.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              name="name" 
              type="text" 
              placeholder="이름*" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-gray-100" 
              required 
            />
            <input 
              name="company" 
              type="text" 
              placeholder="회사명*" 
              value={formData.company}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-gray-100" 
              required 
            />
            <input 
              name="title" 
              type="text" 
              placeholder="직책*" 
              value={formData.title}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-gray-100" 
              required 
            />
            <input 
              name="email" 
              type="email" 
              placeholder="회사이메일*" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-md bg-gray-100" 
              required 
            />
          </div>
          <textarea 
            name="message" 
            placeholder="문의내용*" 
            rows={6} 
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-gray-100" 
            required
          ></textarea>
          
          {submitMessage && (
            <div className={`text-center p-3 rounded-md ${
              submitMessage.includes('성공') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {submitMessage}
            </div>
          )}
          
          <div className="text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#04AAAB] hover:bg-[#039092] text-white font-semibold py-3 px-12 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '처리 중...' : '문의하기'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
} 