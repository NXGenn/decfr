'use client';

import { useAuth, UserButton, UserProfile, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push('/sign-in');
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return null;
  }

  const kycStatus = user?.publicMetadata.kycStatus || 'Not Started';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-end justify-end">
      <UserButton/>
      </div>
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.firstName}!</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Account</h2>
        <p className="mb-2">Email: {user?.emailAddresses[0].emailAddress}</p>
        <p className="mb-4">KYC Status: {kycStatus}</p>
        <Button asChild>
          <Link href="/kyc">
            {kycStatus === 'Not Started' ? 'Start KYC Process' : 'Update KYC Information'}
          </Link>
        </Button>
      </div>
    </div>
  );
}