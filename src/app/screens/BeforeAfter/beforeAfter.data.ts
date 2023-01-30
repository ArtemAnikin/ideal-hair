import bg1 from '@/assets/beforeAfter/post1.svg'
import bg2 from '@/assets/beforeAfter/post2.svg'
import bg3 from '@/assets/beforeAfter/post3.svg'

interface Poster {
	src: string
	alt: string
	width: number
	height: number
}

export const headerTitle = 'ДО/ПІСЛЯ'

export const BeforeAfterData: Poster[] = [
	{
		src: bg1,
		alt: 'bg1',
		width: 340,
		height: 335
	},
	{
		src: bg2,
		alt: 'bg2',
		width: 340,
		height: 335
	},
	{
		src: bg3,
		alt: 'bg3',
		width: 340,
		height: 331
	}
]
