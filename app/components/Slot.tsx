import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import styles from '@/styles/Main.module.scss'

interface SlotsProps{
   title:string,
   online:number,
   link:string,
   image:string,
}
const Slot = ({title,online,link ,image}:SlotsProps) => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.main_slot}>
         <Image loading='lazy' src={image} width={170} height={100} alt='Slot'/>
         <span> 
            <div className={styles.main_slot_pulse}></div>
            {online}
            </span>
         <h2>{title}  </h2>
     
         <Link href={link}>Start Now</Link>
      </div>
   </Suspense>

  )
}

export default Slot
