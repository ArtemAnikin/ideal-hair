import { FC } from 'react'

import styles from './Header.module.scss'

interface IHeaderProps {
	title: string
	back: () => void
}

const Header: FC<IHeaderProps> = ({ title, back }) => {
	return (
		<div className={styles.header}>
			<div className={styles.back} onClick={() => back()}></div>
			<div className={styles.title}>{title}</div>
		</div>
	)
}

export default Header
