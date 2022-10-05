import React from 'react'
import Navbar from '../../layouts/Navbar'
import { Container } from '@chakra-ui/react'
function Home() {
  const mystyle = {textAlign:"center",fontSize:"72px",color:"gray"}
  return (
    <div>
      <Navbar/>
        <h1 style={mystyle}>
          HI U ARE AT HOME
        </h1>
    
    </div>
  )
}

export default Home