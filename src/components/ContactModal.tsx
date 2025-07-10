"use client";

import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-8 m-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h2 className="text-2xl font-bold mb-6">연락처 및 위치</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">회사 정보</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>주소:</strong> 경기도 광주시 도척면 도척윗로 452</li>
              <li><strong>email:</strong> maxhelp@naver.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">오시는 길</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden border">
              <iframe
                src="https://maps.google.com/maps?q=경기도%20광주시%20도척면%20도척윗로%20452&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 