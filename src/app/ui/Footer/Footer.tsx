import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { FooterData } from '@/ui/Footer/footer.data'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			{FooterData.map(item => (
				<Link key={item.link} href={item.link}>
					<Image src={item.src} alt={item.alt} />
				</Link>
			))}
		</div>
	)
}

export default Footer
