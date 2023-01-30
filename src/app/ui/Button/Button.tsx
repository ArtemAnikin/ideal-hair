import { FC } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
	title: string
	onClick: () => void
}

const Button: FC<IButtonProps> = ({ title, onClick }) => {
	return (
		<button className={styles.button} onClick={() => onClick()}>
			{title}
		</button>
	)
}

export default Button
