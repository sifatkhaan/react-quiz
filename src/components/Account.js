import React from "react";
import classes from "../styles/Account.module.css";
import Link from "next/link";
export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link href="/signup">Signup</Link>
      <Link href="/login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
