import instagramIcon from '@/assets/shared/instagram.svg'
import phoneIcon from '@/assets/shared/phone.svg'
import telegramIcon from '@/assets/shared/telegram.svg'
import viberIcon from '@/assets/shared/viber.svg'

import {
	getInstagramUrl,
	getPhoneUrl,
	getTelegramUrl,
	getViberUrl
} from '@/config/url.config'

interface IFooterItem {
	src: string
	link: string
	alt: string
}

export const FooterData: IFooterItem[] = [
	{
		src: instagramIcon,
		link: getInstagramUrl,
		alt: 'instagramIcon'
	},
	{
		src: telegramIcon,
		link: getTelegramUrl,
		alt: 'telegramIcon'
	},
	{
		src: viberIcon,
		link: getViberUrl,
		alt: 'viberIcon'
	},
	{
		src: phoneIcon,
		link: getPhoneUrl,
		alt: 'phoneIcon'
	}
]
