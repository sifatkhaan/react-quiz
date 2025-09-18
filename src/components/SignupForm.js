'use client'
import React, { useState } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function SignupForm() {

    const [userName, setUserName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")
    const [agree, setAgree]= useState("")
    const [error, setError]= useState("")
    const [loading, setLoading]= useState(false)

    const {signup}= useAuth();
    // const history = useHis
    const router = useRouter()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            return setError("Passwords don't mathch!")
        }
        try{
            setError("")
            setLoading(true)
            await signup(email, password, userName)
            router.push('/')
        }catch (err){
            console.error(err ||  "something wrong")
            setLoading(false)
            setError("Failed to create an account!")
        }
    }

  return (
    <div>
      <Form style={{height:'500px'}} className="" onSubmit={handleSubmit}>
        <TextInput type="text" placeholder="Enter name" icon="person" value={userName} onChange={(e)=> setUserName(e.target.value)} />

        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={email} onChange={(e)=> setEmail(e.target.value)}
        />

        <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}/>

        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}
        />

        <Checkbox text="I agree to the Terms &amp; Conditions" value={agree} onChange={(e)=> setAgree(e.target.value)}/>

        <Button disable={loading} type="submit">Submit Now</Button>
        {error && <p className="error"> {error}</p>}
        <div className="info">
          Already have an account? <Link href="/login">Login</Link> instead.
        </div>
      </Form>
    </div>
  );
}
