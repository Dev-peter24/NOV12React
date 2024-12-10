import React from 'react'
// import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
// import Routering from './ROUTER PAGE/Routering'
// import AboutPe from './ROUTER PAGE/AboutPe'
// import NoPge from './ROUTER PAGE/NoPge'
// import ServicesPP from './ROUTER PAGE/ServicesPP'
// import Mapping from './Mapping'
// // import Food from './USE STATE/Food'
// // import Counter from './Counter'
// // import Form from './Form/Form'
// // import Home from './Navbar/NavBar'
import Navbar from './Navbar/Navbar'
// // import HomePg from './Navbar/HomePg'
// import ANIME from './Navbar/ANIME'
// import Navbar from './Navbar/NavBar'
// import NewPage from './ROUTER PAGE/NewPPage'
// import Api from './API dE/Api'
// import SearcH from './E-COMM/SearcH'
// import Head from './E-COMM/Head'
// import Ecom from './E-COMM/Ecom'
// import Counter from './Counter'
import CountPage from './Context/CountPage'
import CountBar from './Context/CountBar'
// import NewPage from './LIGHT/DARK MODE/NewPage'

function App() {
  return (
    <div>
      <CountPage />
      <CountBar />
      {/* <Counter/> */}
      {/* <Food/> */}
      {/* <Counter/> */}
      {/* <Form/> */}
      {/* <HomePg/> */}
      {/* <ANIME/> */}
      {/* <NewPage/> */}
      {/* <BrowserRouter> */}
      {/* <Navbar/> */}
      {/* <Form /> */}
      {/* <NewPage/> */}
         {/* <Ecom />
        <Head />
        <SearcH/> */}
      
        {/* <Routes>
          <Route path="/" element={<Routering/>} />
          <Route path="/About" element={<AboutPe/>} />
          <Route path="/Services" element={<ServicesPP/>} />
          <Route path="*" element={<NoPge/>} />
          <Route path="/map" element={<Mapping/>} />
          <Route path="/api" element={<Api/>} />
      
      
        </Routes>
      </BrowserRouter> */}
    </div>

  )
}

export default App