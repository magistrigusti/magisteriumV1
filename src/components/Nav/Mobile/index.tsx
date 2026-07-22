import * as React from 'react'
import { useRouter } from 'next/router'
import { Menu } from './Menu'
import { Settings } from './Settings'
import { BasicLink } from '~/components/Link'
import { lazy } from 'react'

const MobileSearch = lazy(() =>
	import('~/components/Search/Base/Mobile').then((m) => ({ default: m.MobileSearch }))
) as React.FC

export const MobileNav = React.memo(function MobileNav() {
	const router = useRouter()

	return (
		<nav className="flex items-center z-10 gap-2 py-3 px-4 bg-[linear-gradient(168deg,#344179_3.98%,#445ed0_100%)] lg:hidden">
			<BasicLink href="/" className="shrink-0 mr-auto flex items-center gap-2">
				<span className="sr-only">Navigate to Home Page</span>
				<img
					src="/magisterium-logo.png"
					alt="Логотип Магистериума"
					height={36}
					width={36}
					className="size-9 object-contain"
					fetchPriority="high"
				/>
				<span className="font-bold tracking-tight">Магистериум</span>
			</BasicLink>

			{!router.pathname.startsWith('/yield') && !router.pathname.startsWith('/raises') ? (
				<React.Suspense fallback={<></>}>
					<MobileSearch />
				</React.Suspense>
			) : null}
			<Settings />
			<Menu />
		</nav>
	)
})
