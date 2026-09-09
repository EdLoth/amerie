import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import CasesPage from './pages/CasesPage'
import CaseDetailPage from './pages/CaseDetailPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="bg-background font-body antialiased">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/:slug" element={<CaseDetailPage />} />
        <Route path="/o-que-fazemos" element={<WhatWeDoPage />} />
        <Route path="/quem-somos" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
