import Image from 'next/image'
import logoStake from '@/assets/logo.svg'
import user from '@/assets/user.svg'
import notification from '@/assets/notification.svg'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.header}>
         <Link href={'/'} className={styles.header_logo}>
            <Image width={70} src={logoStake} alt='logo'/>
         </Link>
         <div className={styles.header_balance}>
            <button className={styles.header_button_balance}>
               <span>0.00000$</span>
            </button>
            <button className={styles.header_button_wallet}>Wallet</button>
         </div>
         <div className={styles.header_user}>
            <button>
            <Image width={16}  src={user} alt='user'/>

            </button>
            <button>
            <Image width={16} src={notification} alt='notification'/>
            </button>
         </div>

    </div>
  )
}

export default Header
