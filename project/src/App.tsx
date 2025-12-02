import { Route, Routes } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'
import Help from './components/Help/Help'
import Store from './components/Store/Store'
import Gallery from './components/Gallery/Gallery'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Container} />
        <Route path='/store' Component={Store} />
        <Route path='/help' Component={Help} />
        <Route path='/gallery/:number' Component={Gallery} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App