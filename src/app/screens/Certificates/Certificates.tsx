import Image from 'next/image'
import { FC } from 'react'

import {
	CertificatesBottomData,
	CertificatesCenterData,
	CertificatesTopData,
	headerTitle
} from '@/screens/Certificates/certificates.data'

import Footer from '@/ui/Footer/Footer'
import Header from '@/ui/Header/Header'

import styles from './Certificates.module.scss'

const Certificates: FC = () => {
	return (
		<div className={styles.certificatesWrapper}>
			<div>
				<Header title={headerTitle} showBackButton />
			</div>

			<div className={styles.certificates}>
				<div className={styles.top}>
					{CertificatesTopData.map(cerf => (
						<div
							key={cerf.alt}
							style={{ width: cerf.width, height: cerf.height }}
						>
							<Image src={cerf.scr} alt={cerf.alt} draggable={'false'} />
						</div>
					))}
				</div>
				<div className={styles.center}>
					{CertificatesCenterData.map(cerf => (
						<div
							key={cerf.alt}
							style={{ width: cerf.width, height: cerf.height }}
						>
							<Image src={cerf.scr} alt={cerf.alt} draggable={'false'} />
						</div>
					))}
				</div>
				<div className={styles.bottom}>
					{CertificatesBottomData.map(cerf => (
						<div
							key={cerf.alt}
							style={{ width: cerf.width, height: cerf.height }}
						>
							<Image src={cerf.scr} alt={cerf.alt} draggable={'false'} />
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Certificates
