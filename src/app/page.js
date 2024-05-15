
'use client';
import { Hero } from '@/components/hero';
import { checkServerConnection } from '@/lib/api';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    checkServerConnection();
  }, [])

  return (
   <Hero />
  );
}