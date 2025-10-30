import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <div className="bg-primary-300 text-text-inverse p-sm rounded-lg" {...props}>
      {children}
    </div>
  );
}
