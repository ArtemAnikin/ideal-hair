import { FC, PropsWithChildren } from 'react'

import Footer from '@/ui/Footer/Footer'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	)
}

export default Layout
