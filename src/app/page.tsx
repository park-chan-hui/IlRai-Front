'use client';

import { Button } from '@/components/common/Button';
import Card from '@/components/common/Card';
import { Modal } from '@/components/common/Modal';
import Category from '@/components/common/Category';
import Dropdown from '@/components/common/Dropdown';
import { useState } from 'react';
import CharacterProfile from '@/components/todo/CharacterProfile';
import ProgressBar from '@/components/todo/ProgressBar';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedDropdown, setSelectedDropdown] = useState('선택해주세요');

  const [chaosDungeon, setChaosDungeon] = useState(2.5);
  const [guardianRaid, setGuardianRaid] = useState(1);
  const [paradise, setParadise] = useState(3);

  const [isChaosDone, setIsChaosDone] = useState(false);
  const [isGuardianDone, setIsGuardianDone] = useState(true);

  const characterData = {
    imageUrl: '/next.svg',
    nickname: '일라이',
    server: '카단',
    job: '건슬링어',
    level: 1630,
    combatPower: '2,500,000',
  };

  const handleChaosCheck = () => {
    if (isChaosDone) {
      setChaosDungeon(chaosDungeon + 1);
      setIsChaosDone(false);
    } else {
      if (chaosDungeon >= 1) {
        setChaosDungeon(chaosDungeon - 1);
      }
      setIsChaosDone(true);
    }
  };

  const handleGuardianCheck = () => {
    if (isGuardianDone) {
      setGuardianRaid(guardianRaid + 1);
      setIsGuardianDone(false);
    } else {
      if (guardianRaid >= 1) {
        setGuardianRaid(guardianRaid - 1);
      }
      setIsGuardianDone(true);
    }
  };

  return (
    <div className="gap-2xs flex min-h-screen flex-col p-8">
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
      <div className="gap-xs flex">
        <Card>
          <div className="border-border border-b">
            <CharacterProfile {...characterData} />
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <ProgressBar
                label="카오스 던전"
                variant="checkbox"
                current={chaosDungeon}
                onValueChange={setChaosDungeon}
                onCheckboxChange={handleChaosCheck}
                isChecked={isChaosDone}
                total={5}
              />
              <ProgressBar
                label="가디언 토벌"
                variant="checkbox"
                current={guardianRaid}
                onValueChange={setGuardianRaid}
                onCheckboxChange={handleGuardianCheck}
                isChecked={isGuardianDone}
                total={5}
              />
              <ProgressBar
                label="낙원 (천상)"
                variant="stepper"
                current={paradise}
                onValueChange={setParadise}
                total={5}
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className="border-border border-b">
            <CharacterProfile {...characterData} />
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <ProgressBar
                label="카오스 던전"
                variant="checkbox"
                current={chaosDungeon}
                onValueChange={setChaosDungeon}
                onCheckboxChange={handleChaosCheck}
                isChecked={isChaosDone}
                total={5}
              />
              <ProgressBar
                label="가디언 토벌"
                variant="checkbox"
                current={guardianRaid}
                onValueChange={setGuardianRaid}
                onCheckboxChange={handleGuardianCheck}
                isChecked={isGuardianDone}
                total={5}
              />
              <ProgressBar
                label="낙원 (천상)"
                variant="stepper"
                current={paradise}
                onValueChange={setParadise}
                total={5}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
