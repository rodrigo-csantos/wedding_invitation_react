import './App.css'
import GiftPage from './pages/giftList'
import Home from './pages/home'

import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/gifts' element={ <GiftPage />} />
      </Routes>
    </>
  )
}

export default App
