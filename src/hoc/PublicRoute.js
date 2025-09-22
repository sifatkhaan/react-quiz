'use client';
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function PublicRoute(WrappedComponent) {
  return function PublicComponent(props) {
    const { currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (currentUser) {
        router.replace("/");
      }
    }, [currentUser, router]);

    if (currentUser) return null;
    
    return <WrappedComponent {...props} />;
  };
}
