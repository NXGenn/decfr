import { UserProfile } from "@clerk/nextjs";

export default function KYCPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Complete Your KYC</h1>
      <UserProfile path="/kyc" routing="path" />
    </div>
  );
}