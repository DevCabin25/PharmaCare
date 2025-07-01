"use client";
import Footbar from "@/components/dashboard/Footbar";
import Navbar from "@/components/dashboard/Navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-50">{children}</main>
      <footer className="w-full fixed bottom-0 left-0 z-50">
        <Footbar />
      </footer>
    </div>
  );
};

export default DashboardLayout;
