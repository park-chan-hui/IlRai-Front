'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './Button';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string;
  align?: 'left' | 'right';
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
  align = 'right',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const alignmentClasses = {
    left: 'left-0 origin-top-left',
    right: 'right-0 origin-top-right',
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
          <div className="gap-xs flex items-center">
            {selectedOption}
            <svg
              className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Button>
      </div>

      {isOpen && (
        <div
          className={`ring-opacity-5 mt-2xs ring-primary-500 absolute overflow-hidden rounded-md bg-white ring-1 ${alignmentClasses[align]}`}
        >
          <div className="py-2xs">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                className="px-md py-xs text-primary-500 block text-left text-sm whitespace-nowrap hover:bg-gray-100"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
