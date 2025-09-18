
import Illustration from "@/components/Illustration";
import SignupForm from "@/components/SignupForm";
import React from "react";

export default function SignUp() {
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
