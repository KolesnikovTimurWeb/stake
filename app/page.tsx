"use client"
import Image from "next/image";
import styles from '@/styles/Main.module.scss'
import MainBanner from "./components/MainBanner";
import { useRef, useState } from "react";
import slotsData from '@/data.json'
import Slot from "./components/Slot";

const bannerData =[ {
  title:"Daily Races",
  desc:"Play in our $100,000 Daily Race",
  link:"https://stake.com/casino/home",
  image:"https://cdn.sanity.io/images/tdrhge4k/production/5dc0dd2eaf6d9ccaf58210a1ad9bb6e2de4405da-1026x1026.jpg",
},
{
  title:"Weekly Raffle",
  desc:"Share in $75,000 each week",
  link:"https://stake.com/casino/home",
  image:"https://cdn.sanity.io/images/tdrhge4k/production/736906d1eabf24938deba8005a976a030a9edf79-1026x1026.jpg",
},
{
  title:"Conquer the Casino",
  desc:"Win a share in $50,000 every week",
  link:"https://stake.com/casino/home",
  image:"https://cdn.sanity.io/images/tdrhge4k/production/ca9fb909b678abef96deee8a1d4a3fd2a4f40afe-1026x1026.jpg",
}
]
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export default function Home() {
  // Use Callback if it was a fetch
  const [slots,setSlots] = useState(slotsData)
  const [filteredSlots,setFilteredSlots] = useState(slots)
  const [inputValue,setInputValue] = useState('')

  const debounce = (onChange:any) => {
    let timeout:any;
    return (e:InputEvent) => {
      const form = e;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };
  const handleChange= (value:string) => {
    setInputValue(value);
    const filteredItems = slots.filter((user) =>
      user.title.toLowerCase().includes(value.toLowerCase())
      );
  
      setFilteredSlots(filteredItems);
  }

  return (
    <main className={styles.main}>
      <div className={styles.main_banner}>
        {bannerData.map((item,index)=> (
          // I would put id, not index, because index we can change and then application won't work
          <MainBanner 
          key={index}
           title={item.title}
           desc={item.desc}
           link={item.link}
           image={item.image}
           />
        ))}
      </div>
      <div className={styles.main_input}>
        <input  
        onChange={debounce((e:React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value);
          })}
          type="text" placeholder="Write your slot" />
      </div>
      <div className={styles.main_slots}>
        {filteredSlots.map((item,index)=> (
          <Slot
          key={index}
          title={item.title}
          online={item.online}
          link={item.link}
          image={item.image}
          />
        ))}
      </div>
    </main>
  );
}
