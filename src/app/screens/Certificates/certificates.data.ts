import cerf1 from '@/assets/certificates/cerf1.svg'
import cerf2 from '@/assets/certificates/cerf2.svg'
import cerf3 from '@/assets/certificates/cerf3.svg'
import cerf4 from '@/assets/certificates/cerf4.svg'
import cerf5 from '@/assets/certificates/cerf5.svg'
import cerf6 from '@/assets/certificates/cerf6.svg'
import cerf7 from '@/assets/certificates/cerf7.svg'

interface Certificate {
	scr: string
	width: number
	height: number
	alt: string
}

export const headerTitle = 'СЕРТИФІКАТИ'

export const CertificatesTopData: Certificate[] = [
	{
		scr: cerf1,
		width: 160,
		height: 200,
		alt: 'cerf1'
	},
	{
		scr: cerf2,
		width: 160,
		height: 200,
		alt: 'cerf2'
	}
]

export const CertificatesCenterData: Certificate[] = [
	{
		scr: cerf3,
		width: 340,
		height: 226,
		alt: 'cerf5'
	},
	{
		scr: cerf4,
		width: 340,
		height: 226,
		alt: 'cerf6'
	},
	{
		scr: cerf5,
		width: 340,
		height: 226,
		alt: 'cerf4'
	}
]

export const CertificatesBottomData: Certificate[] = [
	{
		scr: cerf6,
		width: 160,
		height: 200,
		alt: 'cerf3'
	},
	{
		scr: cerf7,
		width: 160,
		height: 200,
		alt: 'cerf7'
	}
]
