import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Slider from '../Components/Slider'
import Cards from '../Components/Cards'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Slider/>
        <Cards/>
        <Services/>
        <Footer/>
      
    </div>
  )
}
