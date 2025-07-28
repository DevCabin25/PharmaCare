'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Pill Spinner */}
        <div className="relative w-12 h-12 animate-spin rounded-full border-t-4 border-blue-500 border-solid">
          <div className="absolute inset-0 flex items-center justify-center">
            💊
          </div>
        </div>

       
      </div>
    </div>
  );
}
