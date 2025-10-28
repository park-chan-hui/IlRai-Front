'use client';

import { Button } from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Modal } from '@/components/common/Modal';
import Category from '@/components/common/Category'; // New import
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('전체'); // New state for active category

  return (
    <div className="gap-2xs flex min-h-screen flex-col">
      <Button onClick={() => setIsOpen(true)}>버튼</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <div>안녕하세요</div>
          안녕하세요
          <Button variant="secondary">버튼</Button>
          <div>안녕하세요</div>
          안녕하세요
          <Button variant="secondary">버튼</Button>
          <div>안녕하세요</div>
          안녕하세요
          <Button variant="secondary">버튼</Button>
          <div>안녕하세요</div>
          안녕하세요
          <Button variant="secondary">버튼</Button>
          <div>안녕하세요</div>
          안녕하세요
          <Button variant="secondary">버튼</Button>
          <div>안녕하세요</div>
          안녕하세요
          <Button variant="secondary">버튼</Button>
        </div>
      </Modal>
      <Button variant="outline">버튼</Button>

      <h2 className="mb-4 text-xl font-bold">카테고리 선택</h2>
      <div className="flex gap-2">
        {['전체', '프론트엔드', '백엔드', '모바일', '디자인', '기타'].map((categoryName) => (
          <Category
            key={categoryName}
            isActive={activeCategory === categoryName}
            onClick={() => {
              setActiveCategory(categoryName);
              console.log(`${categoryName} 카테고리 선택됨`);
            }}
          >
            {categoryName}
          </Category>
        ))}
      </div>

      {/* Existing Card usage */}
      <Card>
        <div>helloworld</div>
        <div>helloworld</div>
        <div>helloworld</div>
        <div>helloworld</div>
        <div>helloworld</div>
        <div>helloworld</div>
        <div>helloworld</div>
        <div>helloworld</div>
      </Card>
    </div>
  );
}
