import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import profileImg from '@/assets/home/profile.svg'
import logo from '@/assets/logo.svg'

import {
	MenuData,
	descriptionData,
	dividerData,
	logoTitle
} from '@/screens/Home/home.data'

import Button from '@/ui/Button/Button'
import Divider from '@/ui/Divider/Divider'
import Footer from '@/ui/Footer/Footer'

import styles from './Home.module.scss'

const Home: FC = () => {
	const { push } = useRouter()

	return (
		<div className={styles.home}>
			<div className={styles.top}>
				<div className={styles.logo}>
					<Image
						width={154}
						height={98}
						src={logo}
						alt={'logo'}
						draggable={false}
					/>
					<div className={styles.title}>{logoTitle}</div>
				</div>
				<div className={styles.profileImage}>
					<Image
						width={140}
						height={140}
						src={profileImg}
						alt={'profile'}
						draggable={false}
					/>
				</div>
			</div>

			<div className={styles.description}>{descriptionData}</div>

			<Divider title={dividerData} />

			<div className={styles.menu}>
				{MenuData.map(menu => (
					<Button
						key={menu.title}
						title={menu.title}
						onClick={() => {
							push(menu.link)
						}}
					/>
				))}
			</div>

			<Footer />
		</div>
	)
}

export default Home
