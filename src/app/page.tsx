import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AlbumSection from '@/components/AlbumSection'
import UpcomingShows from '@/components/UpcomingShows'
import TheKeyIs3 from '@/components/TheKeyIs3'
import MerchSection from '@/components/MerchSection'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AlbumSection />
      <UpcomingShows />
      <TheKeyIs3 />
      {/* <MerchSection /> */}
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
} 