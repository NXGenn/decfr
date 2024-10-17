import { auth, currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    // Update the user's KYC status
    await user.update({
      publicMetadata: {
        ...user.publicMetadata,
        kycStatus: 'Submitted',
        kycSubmissionDate: new Date().toISOString(),
      },
    });

    return NextResponse.json({ message: 'KYC submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('KYC submission error:', error);
    return NextResponse.json({ error: 'Failed to submit KYC' }, { status: 500 });
  }
}