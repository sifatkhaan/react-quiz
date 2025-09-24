"use client";
import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  query,
  get,
  orderByKey,
} from "firebase/database";
import { useAuth } from "@/contexts/AuthContext";

export default function useResults(videoId) {
 const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const { uid } = currentUser;

  useEffect(() => {
    async function fetchResult() {
      const db = getDatabase();
      const resultRef = ref(db, `result/${uid}/${videoId}`);
      const resultQuery = query(
        resultRef,
        orderByKey()
      );
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(resultQuery);
        setLoading(false);
        if (snapshot.exists()) {
            setResults((perv) => {
            return [...perv, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchResult();
  }, [uid, videoId]);

  return {
    loading,
    error,
    results
  };
}
