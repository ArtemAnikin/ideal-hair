import Image from 'next/image'
import { FC } from 'react'

import {
	CertificatesData,
	headerTitle
} from '@/screens/Certificates/certificates.data'

import Footer from '@/ui/Footer/Footer'
import Header from '@/ui/Header/Header'

import styles from './Certificates.module.scss'

const Certificates: FC = () => {
	return (
		<>
			<div>
				<Header title={headerTitle} showBackButton />
			</div>

			<div className={styles.certificates}>
				{CertificatesData.map(cerf => (
					<Image
						width={cerf.width}
						height={cerf.height}
						key={cerf.alt}
						src={cerf.scr}
						alt={cerf.alt}
						draggable={'false'}
						priority
					/>
				))}
			</div>

			<Footer />
		</>
	)
}

export default Certificates
