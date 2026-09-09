import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  // permite que links tipo "/#contato" vindos de outras páginas rolem até a seção certa
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
    </>
  )
}
