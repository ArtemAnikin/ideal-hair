import cn from 'classnames'
import { FC, useState } from 'react'

import {
	ProceduresData,
	headerTitle
} from '@/screens/Procedures/procedures.data'

import Button from '@/ui/Button/Button'
import Footer from '@/ui/Footer/Footer'
import Header from '@/ui/Header/Header'

import styles from './Procedures.module.scss'

const Procedures: FC = () => {
	const [activeProcedure, setActiveProcedure] = useState<string>('')

	const buttonHandler = (procedure: string) => {
		if (procedure === activeProcedure) {
			setActiveProcedure('')
		} else {
			setActiveProcedure(procedure)
		}
	}

	return (
		<div>
			<Header title={headerTitle} showBackButton />

			<div className={styles.procedures}>
				{ProceduresData.map((procedure, index) => {
					const key = `${procedure}-${index}`
					return (
						<div
							className={cn(styles.procedure, {
								[styles.active]: key === activeProcedure
							})}
							key={key}
						>
							<Button
								title={procedure.title}
								onClick={() => buttonHandler(key)}
							/>
							<div className={styles.description}>{procedure.description}</div>
						</div>
					)
				})}
			</div>

			<Footer />
		</div>
	)
}

export default Procedures
