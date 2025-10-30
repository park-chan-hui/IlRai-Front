import React from 'react';
import { Button } from '@/components/common/Button';

type ProgressBarProps = {
  label: string;
  total?: number;
  current: number;
  variant: 'checkbox' | 'stepper';
  onValueChange: (newValue: number) => void;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
};

const ProgressBar = ({
  label,
  total = 5,
  current,
  variant,
  onValueChange,
  onCheckboxChange,
  isChecked,
}: ProgressBarProps) => {
  const handleIncrement = () => {
    onValueChange(Math.min(total, current + 1));
  };

  const handleDecrement = () => {
    onValueChange(Math.max(0, current - 1));
  };

  return (
    <div className="w-full rounded px-2">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium">{label}</span>
        {variant === 'checkbox' && (
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={isChecked}
            onChange={onCheckboxChange}
          />
        )}
        {variant === 'stepper' && (
          <div className="flex items-center space-x-1">
            <Button variant="primary" size="xs" onClick={handleDecrement} className="h-6 w-6 p-0">
              -
            </Button>
            <Button variant="primary" size="xs" onClick={handleIncrement} className="h-6 w-6 p-0">
              +
            </Button>
          </div>
        )}
      </div>
      <div className="flex space-x-1.5">
        {Array.from({ length: total }).map((_, index) => {
          const fillLevel = Math.max(0, current - index);
          const width = fillLevel >= 1 ? '100%' : `${Math.max(0, fillLevel) * 100}%`;

          const isSegmentClickDisabled = variant === 'checkbox' && isChecked;

          return (
            <div
              key={index}
              className={`relative h-5 flex-1 overflow-hidden rounded-md bg-gray-300 ${
                isSegmentClickDisabled ? 'opacity-75 grayscale' : 'cursor-pointer'
              }`}
              onClick={(e) => {
                if (isSegmentClickDisabled) {
                  return;
                }

                if (variant !== 'checkbox') {
                  onValueChange(index + 1);
                  return;
                }

                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;

                if (clickX < rect.width / 2) {
                  onValueChange(index + 0.5);
                } else {
                  onValueChange(index + 1);
                }
              }}
            >
              <div className="h-full bg-green-600" style={{ width: width }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
