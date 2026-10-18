'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({
  className = '',
  imageClassName,
  variant = 'dark',
}: LogoProps) {
  const imgClass = imageClassName || className || 'h-10 sm:h-12';

  return (
    <div className="inline-flex items-center select-none">
      <div className={`relative w-auto flex items-center ${imgClass}`}>
        <Image
          src="/logo-transparent.jpg"
          alt="Saras Immigration Consultancy Inc."
          width={360}
          height={100}
          className={`${imgClass} w-auto object-contain`}
          priority
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
