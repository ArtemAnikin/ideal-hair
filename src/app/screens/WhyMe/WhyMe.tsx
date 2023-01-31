import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { getHomeUrl } from '@/config/url.config'

import {
	backButton,
	descriptionData,
	profileData,
	title
} from '@/screens/WhyMe/whyMe.data'

import Footer from '@/ui/Footer/Footer'

import styles from './WhyMe.module.scss'

const WhyMe: FC = () => {
	const { push } = useRouter()

	return (
		<div className={styles.whyMeWrapper}>
			<div className={styles.back} onClick={() => push(getHomeUrl)}>
				<Image
					width={backButton.width}
					height={backButton.height}
					src={backButton.src}
					alt={backButton.alt}
					draggable
				/>
			</div>

			<div className={styles.top}>
				<div className={styles.title}>{title}</div>
				<Image
					width={profileData.width}
					height={profileData.height}
					src={profileData.src}
					alt={profileData.alt}
					draggable={'false'}
					quality={100}
					unoptimized
					priority
				/>
			</div>

			<div className={styles.description}>
				<ul>
					{descriptionData.map(el => (
						<li key={el}>{el}</li>
					))}
				</ul>
			</div>

			<Footer />
		</div>
	)
}

export default WhyMe
