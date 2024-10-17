import { Button } from "@/components/ui/button";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <><div>
      <Button asChild>
        <Link href="../home">Home</Link>
      </Button>
    </div><div className="flex justify-center items-center min-h-screen bg-gray-100">

        <SignIn />
      </div></>
  );
}

export function generateStaticParams() {
  return [];
}