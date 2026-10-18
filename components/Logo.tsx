'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = 'h-12', variant = 'dark' }: LogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="relative h-10 sm:h-12 w-auto flex items-center">
        <Image
          src="/logo-transparent.jpg"
          alt="Saras Immigration"
          width={220}
          height={60}
          className="h-10 sm:h-12 w-auto object-contain"
          priority
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
