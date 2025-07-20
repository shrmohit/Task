import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import Services from './Services'
import Footer from './shared/Footer'
import PopularDestinationInIndia from './PopularDestinationInIndia'
import PopularDestinationInInternational from './PopularDestinationInInternational'
import PopularHotel from './PopularHotel'
import FeaturedTours from './FeaturedTours'
import GallerySection from './GallerySection'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <PopularDestinationInIndia />
      <PopularDestinationInInternational />
      <FeaturedTours />
      <GallerySection />
      <PopularHotel />
      <Footer />
    </div>
  )
}

export default Home