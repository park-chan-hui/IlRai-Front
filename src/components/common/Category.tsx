import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

interface CategoryProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  isActive?: boolean;
}

export default function Category({
  children,
  isActive = false,
  className,
  ...props
}: CategoryProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
  const defaultStyles = 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'; // 흰색 배경, 회색 텍스트, 미묘한 테두리
  const activeStyles = 'bg-black text-white hover:bg-black/80'; // 검은색 배경, 흰색 텍스트

  return (
    <button
      className={`${baseStyles} ${isActive ? activeStyles : defaultStyles} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
