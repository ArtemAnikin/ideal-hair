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

import styles from './WhyMe.module.scss'

const WhyMe: FC = () => {
	const { push } = useRouter()

	return (
		<div>
			<div className={styles.back} onClick={() => push(getHomeUrl)}>
				<Image
					width={backButton.width}
					height={backButton.height}
					src={backButton.src}
					alt={backButton.alt}
					draggable
					unoptimized
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
		</div>
	)
}

export default WhyMe
