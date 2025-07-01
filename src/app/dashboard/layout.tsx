"use client";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
    

      <main className="flex-1 bg-gray-50 ">{children}</main>
    </div>
  );
};

export default DashboardLayout;
