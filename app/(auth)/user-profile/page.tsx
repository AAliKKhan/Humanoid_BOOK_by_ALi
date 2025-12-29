"use client"

import { UserProfile } from "@clerk/nextjs";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        setIsLoading(true);
        setError(null);
        try {
          const token = await getToken();
          const response = await fetch("/api/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUserData(data);
        } catch (err: any) {
          console.error("Failed to fetch user profile:", err);
          setError(err.message || "Failed to load user profile data.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchUserData();
  }, [user, getToken]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-8">
        Your Profile
      </h2>
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-xl border border-emerald-500/30">
        {isLoading && <p className="text-gray-400">Loading profile data...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {userData && (
          <div className="space-y-4">
            <div>
              <Label className="text-gray-300">Email:</Label>
              <p className="text-gray-200">{userData.email}</p>
            </div>
            {userData.first_name && (
              <div>
                <Label className="text-gray-300">Name:</Label>
                <p className="text-gray-200">{userData.first_name} {userData.last_name}</p>
              </div>
            )}
            {userData.role && (
              <div>
                <Label className="text-gray-300">Role:</Label>
                <p className="text-gray-200">{userData.role}</p>
              </div>
            )}
            {userData.interests && userData.interests.length > 0 && (
              <div>
                <Label className="text-gray-300">Interests:</Label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {userData.interests.map((interest: string) => (
                    <Badge key={interest} variant="secondary" className="bg-emerald-600 text-white">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {userData.goal && (
              <div>
                <Label className="text-gray-300">Goal:</Label>
                <p className="text-gray-200">{userData.goal}</p>
              </div>
            )}
            {/* Add more user data display as needed */}
          </div>
        )}
      </div>

      <div className="mt-8 w-full max-w-md">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-4">
          Manage Clerk Account
        </h3>
        {/* Clerk's UserProfile component for managing authentication details */}
        <UserProfile path="/user-profile" routing="path" />
      </div>
    </div>
  );
}
