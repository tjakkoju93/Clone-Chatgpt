import React from 'react'
import './App.css'
import LeftSection from './Components/Left/LeftSection'
import RightSection from './Components/Right/RightSection'

function App() {


  return (
    <div className="mainpage">
        <div className="leftsection">
          <LeftSection/>
        </div>
        <div className="rightsection">
          <RightSection/>
        </div>
    </div>
  )
}

export default App
