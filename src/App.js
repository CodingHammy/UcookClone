import './App.css'

import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import HowItWorks from './components/howitworks/HowItWorks'
import WhyUcook from './components/whyucook/WhyUcook'
import OnTheMenu from './components/onthemenu/OnTheMenu'
import PageBanner from './components/pagebanner/PageBanner'
import Footer from './components/footer/Footer'
import Testimonies from './components/testimonies/Testimonies'

function App() {
  return (
    <>
      <Nav />
      <main className="main_wrapper">
        <Hero />
        <HowItWorks />
        <OnTheMenu />
        <PageBanner />
        <WhyUcook />
        <Testimonies />
        <Footer />
      </main>
    </>
  )
}

export default App
