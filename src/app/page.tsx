import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SkillStackSection from '@/components/SkillStackSection'
import FeaturesSection from '@/components/FeaturesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SkillStackSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 