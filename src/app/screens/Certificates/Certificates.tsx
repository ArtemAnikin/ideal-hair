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
					<div>
						{CertificatesTopData.map(cerf => (
							<Image
								height={cerf.height}
								width={cerf.width}
								key={cerf.alt}
								src={cerf.scr}
								alt={cerf.alt}
								draggable={'false'}
								unoptimized
								priority
							/>
						))}
					</div>
				</div>

				<div className={styles.center}>
					{CertificatesCenterData.map(cerf => (
						<div
							key={cerf.alt}
							style={{ width: cerf.width, height: cerf.height }}
						>
							<Image
								fill
								src={cerf.scr}
								alt={cerf.alt}
								draggable={'false'}
								unoptimized
								priority
							/>
						</div>
					))}
				</div>

				<div className={styles.bottom}>
					<div>
						{CertificatesBottomData.map(cerf => (
							<Image
								height={cerf.height}
								width={cerf.width}
								key={cerf.alt}
								src={cerf.scr}
								alt={cerf.alt}
								draggable={'false'}
								unoptimized
								priority
							/>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Certificates
