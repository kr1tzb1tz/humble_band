import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import RecordingSection from '@/components/RecordingSection'
import UpcomingShows from '@/components/UpcomingShows'
import MerchSection from '@/components/MerchSection'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RecordingSection />
      <UpcomingShows />
      {/* <MerchSection /> */}
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
} 