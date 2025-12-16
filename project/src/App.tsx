import { Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'
import Help from './components/Help/Help'
import Store from './components/Store/Store'
import Gallery from './components/Gallery/Gallery'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

const App = () => {
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
    const handleLoad = () => setLoading(false)
    window.addEventListener("load", handleLoad)

    return () => window.removeEventListener("load", handleLoad)
  }, [])

  if (loading) {
    return (
      <Loader/>
    )
  }

  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-0 left-0 z-50 bg-[#0B0B0B]' initial={{ translateY: "0%" }} animate={{ translateY: "-100%" }} transition={{ duration: 2, ease: "easeInOut", delay: 3.5 }}>
        <motion.div initial={{ translateX: "-100%" }} animate={{ translateX: "0%" }} transition={{ duration: 2, ease: "easeInOut" }} className='w-full h-[25%] bg-[#FCAF17]'></motion.div>
        <motion.div initial={{ translateX: "-100%" }} animate={{ translateX: "0%" }} transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }} className='w-full h-[25%] bg-[#A50202]'></motion.div>
        <motion.div initial={{ translateX: "-100%" }} animate={{ translateX: "0%" }} transition={{ duration: 2, ease: "easeInOut", delay: 1 }} className='w-full h-[25%] bg-[#1A1A1A]'></motion.div>
        <motion.div initial={{ translateX: "-100%" }} animate={{ translateX: "0%" }} transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }} className='w-full h-[25%] bg-[#0D3B66]'></motion.div>
      </motion.div>

      <Header />
      <Routes>
        <Route path='/' Component={Container} />
        <Route path='/store' Component={Store} />
        <Route path='/help' Component={Help} />
        <Route path='/gallery/:number' Component={Gallery} />
      </Routes>
      <Footer />
    </>
  )
}

export default App