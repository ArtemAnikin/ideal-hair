import profileImg from '@/assets/home/profile.svg'
import logo from '@/assets/logo.svg'

import {
	getBeforeAfterUrl,
	getCertificatesUrl,
	getFeedbackUrl,
	getProceduresUrl,
	getWhyMeUrl
} from '@/config/url.config'

interface MenuItem {
	title: string
	link: string
}
export const logoTitle = 'Це шлях до волосся мрії'

export const descriptionData =
	'Привіт! Я - Катерина Ільченко,\n' +
	'майстер реконструкції та модифікації\n' +
	'волосся.\n' +
	'\n' +
	'Моя мета – зробити твоє волосся\n' +
	'естетично красивим, здоровим і навчити\n' +
	'тебе доглядати за ним у домашніх умовах.\n'

export const logoData = {
	src: logo,
	alt: 'logo',
	width: 154,
	height: 98
}

export const profileImage = {
	src: profileImg,
	alt: 'profile',
	width: 140,
	height: 140
}

export const dividerData = 'Дозволь собі ідеальне волосся'

export const MenuData: MenuItem[] = [
	{
		title: 'СЕРТИФІКАТИ',
		link: getCertificatesUrl
	},
	{
		title: 'ЧОМУ Я?',
		link: getWhyMeUrl
	},
	{
		title: 'ПРОЦЕДУРИ',
		link: getProceduresUrl
	},
	{
		title: 'ДО/ПІСЛЯ',
		link: getBeforeAfterUrl
	},
	{
		title: 'ВІДГУКИ',
		link: getFeedbackUrl
	}
]
