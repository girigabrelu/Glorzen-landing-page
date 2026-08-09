import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import FeelsShowcase from './components/FeelsShowcase'
import ProductExperience from './components/ProductExperience'
import AppPreviewSection from './components/AppPreviewSection'
import CommunitySection from './components/CommunitySection'
import PrivacyTrust from './components/PrivacyTrust'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import FinalCta from './components/FinalCta'
import SuggestionSection from './components/SuggestionSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="glorzen-landing-page" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FeelsShowcase />
        <ProductExperience />
        <AppPreviewSection />
        <CommunitySection />
        <PrivacyTrust />
        <AboutSection />
        <FaqSection />
        <FinalCta />
        <SuggestionSection />
      </main>
      <Footer />
    </div>
  )
}
