'use client';

import { Button } from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Modal } from '@/components/common/Modal';
import Category from '@/components/common/Category';
import Dropdown from '@/components/common/Dropdown';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedDropdown, setSelectedDropdown] = useState('선택해주세요');

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
            }}
          >
            {categoryName}
          </Category>
        ))}
      </div>
      <div>
        <h2 className="mb-4 text-xl font-bold">드롭다운 예시</h2>
        <div className="flex justify-end">
          <Dropdown
            options={[
              '1막: 에기르',
              '2막: 아브렐슈드',
              '3막: 모르둠',
              '4막: 아르모체',
              '종막: 카제로스',
            ]}
            selectedOption={selectedDropdown}
            onSelect={setSelectedDropdown}
          />
        </div>
      </div>

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
