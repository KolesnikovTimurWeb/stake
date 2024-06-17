import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface SlotsProps{
   title:string,
   online:number,
   link:string,
   image:string,
}
const Slot = ({title,online,link ,image}:SlotsProps) => {
  return (
    <div>
      <Image src={image} width={100} height={100} alt='Slot'/>
      <h2>{title}</h2>
      <span>{online}</span>
      <Link href={link}>Start Now</Link>
    </div>
  )
}

export default Slot
