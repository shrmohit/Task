import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  )
}

export default Home