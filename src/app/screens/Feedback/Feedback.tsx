import Image from 'next/image'
import { FC } from 'react'

import { FeedbackData, headerTitle } from '@/screens/Feedback/feedback.data'

import Header from '@/ui/Header/Header'

import styles from './Feedback.module.scss'

const Feedback: FC = () => {
	return (
		<div>
			<Header title={headerTitle} showBackButton />
			<div className={styles.feedbacks}>
				{FeedbackData.map(item => (
					<div className={styles.feedback} key={item.alt}>
						<Image
							style={{ float: `${item.float}` }}
							height={item.height}
							width={item.width}
							src={item.src}
							alt={item.alt}
							draggable={'false'}
							priority
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Feedback
