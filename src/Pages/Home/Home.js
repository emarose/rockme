import React from 'react'
import logo  from '../../Components/Menu/logo.png'
import learn from './img/learn.jpg'
import { Container, Col, Card, CardGroup } from 'react-bootstrap'
import './Home.css'

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

      <Container fluid className="homeBannerContainer">
        <h4>
          Rockme is an interactive website, designed to let your mind create beautiful and unique music. Explore and grow your talents.
        </h4>
        <div className="cardWrapper">

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={learn} />
            <Card.Body>
              <Card.Title>Learn</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>

          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>

        </div>
      </Container>
      <Container fluid className="pricingContainer">
        <Col className="pricingLeft">

        </Col>
        <Col className="pricingRight">

        </Col>

      </Container>
    </>
  )
}

export default Home
