import React from 'react';
import Image from 'next/image';

type CharacterProfileProps = {
  imageUrl: string;
  nickname: string;
  server: string;
  job: string;
  level: number;
  combatPower: string;
};

const CharacterProfile = ({
  imageUrl,
  nickname,
  server,
  job,
  level,
  combatPower,
}: CharacterProfileProps) => {
  return (
    <div className="flex items-center space-x-4 p-4">
      <div className="relative h-24 w-24">
        <Image
          src={imageUrl}
          alt={`${nickname} profile picture`}
          layout="fill"
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{nickname}</h2>
        <p className="text-sm text-gray-500">
          {server} | {job}
        </p>
        <div className="mt-2 text-sm">
          <p>
            <span className="font-semibold">아이템 레벨:</span> {level}
          </p>
          <p>
            <span className="font-semibold">전투력:</span> {combatPower}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;
