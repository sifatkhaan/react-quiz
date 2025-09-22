'use client';
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function PrivateRoute(WrappedComponent) {
  return function ProtectedRoute(props) {
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!currentUser) {
        router.replace("/login");
      }
    }, [currentUser, router]);

    if (!currentUser) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}
