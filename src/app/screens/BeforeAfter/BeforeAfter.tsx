import Image from 'next/image'
import { FC } from 'react'

import {
	BeforeAfterData,
	headerTitle
} from '@/screens/BeforeAfter/beforeAfter.data'

import Footer from '@/ui/Footer/Footer'
import Header from '@/ui/Header/Header'

import styles from './BeforeAfter.module.scss'

const BeforeAfter: FC = () => {
	return (
		<div>
			<Header title={headerTitle} showBackButton />
			<div className={styles.posters}>
				{BeforeAfterData.map(poster => (
					<div key={poster.alt} className={styles.poster}>
						<Image
							width={poster.width}
							height={poster.height}
							src={poster.src}
							alt={poster.alt}
							draggable={'false'}
						/>
					</div>
				))}
			</div>

			<Footer />
		</div>
	)
}

export default BeforeAfter
