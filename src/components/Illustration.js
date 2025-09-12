import React from 'react'
import signupImage from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";
import Image from 'next/image';
export default function Illustration() {
  return (
    <div className={classes.illustration}>
    <Image src={signupImage} alt="Signup" />
  </div>
  )
}
