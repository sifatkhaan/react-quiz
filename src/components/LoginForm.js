"use client";
import classes from "../styles/Login.module.css";
import React, { useState } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  // const history = useHis
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      router.push("/");
    } catch (err) {
      console.error(err || "something wrong");
      setLoading(false);
      setError("Failed to create an account!");
    }
  };
  return (
    <div>
      <Form className={`${classes.login}`} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={email} onChange={(e)=> setEmail(e.target.value)}
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}/>

        <Button disable={loading} type="submit">Submit Now</Button>
        {error && <p className="error"> {error}</p>}
        <div className="info">
          Dont have an account? <Link href="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
}
