"use client";
import Illustration from "@/components/Illustration";
import SignupForm from "@/components/SignupForm";
import PublicRoute from "@/hoc/PublicRoute";
import React from "react";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
export default PublicRoute(SignUp);
