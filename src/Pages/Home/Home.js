import React from 'react'
import logo  from '../../Components/Menu/logo.png'
import { Container } from 'react-bootstrap'
import './Home.css'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

function Home() {
  return (
    <>
      <Container fluid className="homeContainer text-center"> 
        <div className="homeText">
          <h2 data-aos="fade-in">Where words fail,<br/><strong>music speaks</strong></h2>
          <p data-aos="fade-right" data-aos-delay="400">Get you creative mind running</p>
          <img src={logo} alt="logo" data-aos="fade-in" />
        </div>
      </Container>
      <HomeBanner/>
    </>
  )
}

export default Home
