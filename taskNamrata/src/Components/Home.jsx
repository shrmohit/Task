import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Services from './Services'
import Footer from './shared/Footer'
import Story from './Story'
import Experience from './Experience'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Story />
      <Experience/>
      <Footer />
    </div>
  )
}

export default Home