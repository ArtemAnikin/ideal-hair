import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import backIcon from '@/assets/leftArrow.svg'

import { getHomeUrl } from '@/config/url.config'

import styles from './Header.module.scss'

interface IHeaderProps {
	title: string
	showBackButton: boolean
}

const Header: FC<IHeaderProps> = ({ title, showBackButton = false }) => {
	const { push } = useRouter()

	return (
		<div className={styles.header}>
			{showBackButton && (
				<div className={styles.back} onClick={() => push(getHomeUrl)}>
					<Image
						width={15}
						height={24}
						src={backIcon}
						alt={'back'}
						draggable={false}
						unoptimized
					/>
				</div>
			)}
			<div className={styles.title}>{title}</div>
		</div>
	)
}

export default Header
