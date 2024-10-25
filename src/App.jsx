// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Header from "./pages/Header"
import Task from "./pages/Task"

function App() {

  return (
    <>
      <div className="container" style={{maxWidth:"600px", margin:"0px auto", backgroundColor:'#f4f5ff'} }>
        <Header />
        <Task/>
      </div>
    </>
  )
}

export default App
