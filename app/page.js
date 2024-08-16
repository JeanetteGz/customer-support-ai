// app/page.js
"use client";
import SignInPage from './signin/page';
import SignUpPage from './signup/page';
import LandingPage from './landing/page';
import { usePathname } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();

  if (pathname === '/') {
    return <LandingPage />;
  }

  if (pathname === '/signin') {
    return <SignInPage />;
  }

  if (pathname === '/signup') {
    return <SignUpPage />;
  }

  return <SignUpPage />;
};

export default Page;
