import React from 'react'
import { Col, Row } from 'react-bootstrap'

const About = () => {
  return (
    <div className="text-center text-white">
   
      <Row>
      <Col className="my-3 mx-auto profile__container  " md={8} lg={8} sm={11} >
              <div className="profile__card glass-container  d-flex user_card  py-2">
                  <div className=" p-3 ">
                      <img src="shah.png" className="text-center" alt="Shah" height="300" />
                  </div>
                  <div className="card-details my-3 tmt-4 px-4">
                    <h1>Shah Hussain</h1>
                  
                    <p>A passionate Web developer from India</p>
                    <p>Hi! I am Shah Hussain , a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since last year. I enjoy creating beautifully designed, intuitive and functional websites. I am very passionate about Full Stack Web Development with Javascript. I am a Tech-Lover.</p>
                 <div className="text-left  "> <a href="https://github.com/Shah-Hussain-Dev" className="btn btn-outline-primary profile_btn  shadow-lg">View Profile </a></div>
                  </div>

              </div>
           </Col>
      </Row>
    </div>
  )
}

export default About