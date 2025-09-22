import React from 'react'
import image from "../assets/images/3.jpg";
import classes from "../styles/Video.module.css";
import Image from 'next/image';
import Link from 'next/link';
export default function Video({id, title, noq}) {
  console.log(id, title, 'id')
  return (
    <Link href="/quiz">
    <div className={classes.video}>
      {/* <img src={image} alt="Video Title" /> */}
      <Image src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} width={200} height={200}/>
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>
   </Link>
  )
}
