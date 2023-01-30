import fb1 from '@/assets/feedback/fb1.svg'
import fb2 from '@/assets/feedback/fb2.svg'
import fb3 from '@/assets/feedback/fb3.svg'
import fb4 from '@/assets/feedback/fb4.svg'
import fb5 from '@/assets/feedback/fb5.svg'
import fb6 from '@/assets/feedback/fb6.svg'
import fb7 from '@/assets/feedback/fb7.svg'
import fb8 from '@/assets/feedback/fb8.svg'
import fb9 from '@/assets/feedback/fb9.svg'

interface IFeedbackItem {
	float: 'left' | 'right'
	src: string
	alt: string
	width: number
	height: number
}

export const headerTitle = 'ВІДГУКИ'

export const FeedbackData: IFeedbackItem[] = [
	{
		float: 'left',
		src: fb1,
		alt: 'fb1',
		width: 247,
		height: 111
	},
	{
		float: 'right',
		src: fb2,
		alt: 'fb2',
		width: 259,
		height: 104
	},
	{
		float: 'left',
		src: fb3,
		alt: 'fb3',
		width: 272,
		height: 154
	},
	{
		float: 'right',
		src: fb4,
		alt: 'fb4',
		width: 238,
		height: 147
	},
	{
		float: 'left',
		src: fb5,
		alt: 'fb5',
		width: 244,
		height: 253
	},
	{
		float: 'right',
		src: fb7,
		alt: 'fb7',
		width: 265,
		height: 148
	},
	{
		float: 'left',
		src: fb6,
		alt: 'fb6',
		width: 261,
		height: 252
	},
	{
		float: 'right',
		src: fb8,
		alt: 'fb8',
		width: 235,
		height: 177
	},
	{
		float: 'left',
		src: fb9,
		alt: 'fb9',
		width: 229,
		height: 197
	}
]
