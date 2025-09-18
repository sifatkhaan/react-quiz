"use client";
import React from "react";
import classes from "../styles/Account.module.css";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser?.displayName}</span>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            logout{""}
          </span>
        </>
      ) : (
        <>
          <Link href="/signup">Signup</Link>
          <Link href="/login">Login</Link>
        </>
      )}

      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
