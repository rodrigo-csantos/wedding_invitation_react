import './App.css'
import Home from './pages/home'
import GiftPage from './pages/giftList/GiftPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/gifts' element={ <GiftPage /> } />
      </Routes>
    </>
  )
}

export default App
