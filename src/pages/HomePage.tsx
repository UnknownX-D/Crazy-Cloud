import { CTA, Footer } from '../components/Footer'
import { Features } from '../components/Features'
import { Hero } from '../components/Hero'
import { HostingCategories } from '../components/HostingCategories'
import { BotHostingSpotlight } from '../components/BotHostingSpotlight'
import { DashboardPreview } from '../components/DashboardPreview'
import { Comparison, Pricing } from '../components/Pricing'
import { Testimonials } from '../components/Testimonials'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HomePage() {
	const { hash } = useLocation()
	useEffect(() => {
		if (!hash) return
		const id = hash.replace('#', '')
		// slight delay to allow content to mount
		setTimeout(() => {
			const el = document.getElementById(id)
			if (el) el.scrollIntoView({ behavior: 'smooth' })
		}, 50)
	}, [hash])

	return <><Hero /><HostingCategories /><BotHostingSpotlight /><Pricing /><Features /><DashboardPreview /><Comparison /><Testimonials /><CTA /><Footer /></>
}
