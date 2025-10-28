import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  // 기본 카드 스타일을 여기에 정의합니다. (예: padding, border, shadow 등)
  return (
    <div className="bg-primary-300 text-text-inverse p-sm rounded-lg" {...props}>
      {children}
    </div>
  );
}
