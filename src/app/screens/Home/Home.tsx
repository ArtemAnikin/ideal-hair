import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import {
	MenuData,
	descriptionData,
	dividerData,
	logoData,
	logoTitle,
	profileImage
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
						width={logoData.width}
						height={logoData.height}
						src={logoData.src}
						alt={logoData.alt}
						draggable={false}
						quality={100}
						unoptimized
						priority
					/>
					<div className={styles.title}>{logoTitle}</div>
				</div>
				<div className={styles.profileImage}>
					<Image
						width={profileImage.width}
						height={profileImage.height}
						src={profileImage.src}
						alt={profileImage.alt}
						draggable={false}
						quality={100}
						unoptimized
						priority
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
