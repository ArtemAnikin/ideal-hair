import { FC } from 'react'

import styles from './Divider.module.scss'

interface IDividerProps {
	title: string
}

const Divider: FC<IDividerProps> = ({ title }) => {
	return <div className={styles.divider}>{title}</div>
}

export default Divider
