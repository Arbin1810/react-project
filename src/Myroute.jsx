import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contactus from './pages/Contactus'
import Layout from './components/Layout'
import Productpage from './pages/Productpage'

const Myroute = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Layout/>} >
            <Route index element={<Homepage/>} />
            <Route path='contact' element={<Contactus/>}/>
            <Route path='product' element={<Productpage/>} />
            </Route>
            
            </Routes>      
        </Router>
    </>
  )
}

export default Myroute
