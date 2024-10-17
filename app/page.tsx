'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <>
  <div className=" p-4 bg-blue-100 flex flex-col-reverse items-end justify-end justify-items-end">
    {isSignedIn ? (
      <div className="space-x-4">
        <Button asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild variant="outline">
            <Link href="/kyc">Complete KYC</Link>
        </Button>
      </div>
    ) : (
      <div className="space-x-4">
        <Button asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/sign-in">Sign In</Link>
        </Button>
       </div>
    )}
    </div>
    <div className="flex flex-col items-center justify-self-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">DEcFR</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Secure and efficient user onboarding and KYC verification for your financial needs.
      </p>
     
    </div>
    </>
  );
}