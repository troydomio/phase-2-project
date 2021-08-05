import 'bootstrap/dist/css/bootstrap.css'
import {Tab, Tabs,Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Carousel } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'

const About = () => {
    const [quotes, setQuote]=useState([])
    
    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(r => r.json())
        .then(data => setQuote(data) )
    }, [])
    let count = quotes.slice(1550)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let newArr = []

    count.forEach(quote => {
        newArr.push(`${quote.text} By: ${quote.author}`)
    })

    let randText1 = newArr[getRandomInt(9)]
    let randText2 = newArr[getRandomInt(9)]
    let randText3 = newArr[getRandomInt(9)]
    let randText4 = newArr[getRandomInt(9)]
    
    return (
        <div>
           
        <Container>
            <Row > 
                <Col></Col>
       <Col xs={9}>
        
        <div >
           <Tabs  eventKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="About The App" >
  <h3> Howdy,</h3>
  <h6>Thank you for visiting TravelTex, a destination hub for Texas-based parks, tours, museums and more!</h6>
  <img className="mt-5" src="https://i.pinimg.com/originals/9f/c6/96/9fc696fbc8fb4fb8229c095f788523f7.png"/>
  </Tab>
 
  <Tab eventKey="profile" title="Authors">

   <img  src="https://ca.slack-edge.com/T02MD9XTF-U02296GA5UG-g06ba4f77e73-512" style={{width:"300px"}}/>
   <h1>Daniel Ezekiel</h1>

   <img src="https://ca.slack-edge.com/T02MD9XTF-U020LMZLCJX-7d49f9136a5d-512" style={{width:"300px"}}/>
   <h1>Troy Domio</h1>
   
  </Tab>
 
</Tabs>

        </div>
        </Col>
        <Col></Col>
        </Row>
        
            <Carousel className="mt-5">
                <Carousel.Item>
                    <h1>{randText1}</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{randText2}</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{randText3}</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{randText4}</h1>
                </Carousel.Item>
            </Carousel>
            </Container>
        </div>
    )
}

export default About
