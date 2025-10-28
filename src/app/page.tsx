'use client';

import { Button } from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Modal } from '@/components/common/Modal';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="gap-2xs flex min-h-screen flex-col items-center justify-items-center">
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
