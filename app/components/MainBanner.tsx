import styles from '@/styles/Main.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface MainBannerProps{
   title:string,
   desc:string,
   link:string,
   image:any
}
const MainBanner = ({title,desc,link,image}:MainBannerProps) => {
  return (
    <div className={styles.main_bannerCard}>
      <div>
        <h2>{title}</h2>
          <p>{desc}</p>
          <Link href={link}>Start Now</Link>
      </div>
      <div>
        <Image width={250} height={250} src={image} alt='Bacr'/>
      </div>
    </div>
  )
}

export default MainBanner
