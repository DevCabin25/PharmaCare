"use client";
import { useEffect, useState } from "react";
import Head from "next/head";

interface Pharmacy {
  name: string;
  address: string;
  registrationNumber: string;
  contact: string;
  managerName: string;
  openingHours: string;
  status: "active" | "inactive";
}

interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [pharmacy, setPharmacy] = useState<Pharmacy | null>(null);

  useEffect(() => {
    const fakeUser: User = {
      name: "Dr. Ahsan Ullah",
      email: "ahsan@parmha.care",
      avatarUrl: "https://i.pravatar.cc/150?img=7",
    };

    const fakePharmacy: Pharmacy = {
      name: "Shifa Pharmacy",
      address: "123/4 West Dhanmondi, Dhaka 1209, Bangladesh",
      registrationNumber: "PH-BD-2025-0456",
      contact: "+880 1723-123456",
      managerName: "Dr. Ahsan Ullah",
      openingHours: "9:00 AM – 10:00 PM",
      status: "active",
    };

    setUser(fakeUser);
    setPharmacy(fakePharmacy);
  }, []);

  if (!user || !pharmacy) return <div className="text-center py-10">Loading profile...</div>;

  return (
    <>
      <Head>
        <title>{user.name} | Parmha Care</title>
      </Head>

      <div className="min-h-screen bg-sky-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-sky-500 p-6 text-white text-center">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
          </div>

          {/* Pharmacy Info */}
          <div className="p-6 bg-white space-y-6">
            <h3 className="text-xl font-semibold text-sky-700">Pharmacy Information</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard label="Pharmacy Name" value={pharmacy.name} />
              <InfoCard label="Registration No." value={pharmacy.registrationNumber} />
              <InfoCard label="Address" value={pharmacy.address} />
              <InfoCard label="Manager" value={pharmacy.managerName} />
              <InfoCard label="Contact" value={pharmacy.contact} />
              <InfoCard label="Opening Hours" value={pharmacy.openingHours} />
              <InfoCard
                label="Status"
                value={
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-white text-sm ${
                      pharmacy.status === "active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {pharmacy.status.toUpperCase()}
                  </span>
                }
              />
            </div>

            <div className="text-center pt-4">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-lg transition">
                Edit Pharmacy Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-base font-medium text-gray-800">{value}</p>
    </div>
  );
}
