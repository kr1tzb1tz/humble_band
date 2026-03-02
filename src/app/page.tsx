import Header from '@/components/Header'
import SampleSection from '@/components/SampleSection'
import HeroSection from '@/components/HeroSection'
import UpcomingShows from '@/components/UpcomingShows'
import MeetTheBand from '@/components/MeetTheBand'
//import TheKeyIs3 from '@/components/TheKeyIs3'
//import MerchSection from '@/components/MerchSection'
//import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MeetTheBand />
      <SampleSection />
      <UpcomingShows />
      {/* <TheKeyIs3 /> */}
      {/* <MerchSection /> */}
      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
} 
