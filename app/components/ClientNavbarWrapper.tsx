"use client";
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

export default function ClientNavbarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let variant: 'default' | 'colored' | 'transparent' = 'default';
  if (pathname === '/about') {
    variant = 'colored';
  } else if (pathname === '/') {
    variant = 'transparent';
  }
  return (
    <>
      <Navbar variant={variant} />
      <main>{children}</main>
    </>
  );
}
