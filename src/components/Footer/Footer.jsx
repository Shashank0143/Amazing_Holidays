import React from 'react'
import '../..//components/Footer/footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../..//assets/images/logo1.png'
const quick__links =[
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
  
]
const quick__links2 =[
  {
    path: '/gallery',
    display: 'Gallery'
  },
  
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
       <Container>
        <Row>
          <Col lg = "3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>Traveling opens the door to creating memories</p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link href={'https://youtube.com/@amazingholidays1556'}><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link href={'https://instagram.com/amazing_holidays21?igshid=YmMyMTA2M2Y='}><i className="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link href={'https://www.facebook.com/profile.php?id=100077073857885&mibextid=ZbWKwL'}><i className="ri-facebook-circle-fill"></i></Link>
                </span>
                <span>
                  <Link href={'https://www.linkedin.com/in/amazing-holidays-0278a122a'}><i className="ri-linkedin-box-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) =>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Contacts</h5>
            <ListGroup className='footer__quick-links'>              
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i className="ri-map-pin-line"></i>
                      </span>
                      Address:
                    </h6>
                    <p className='mb-0'>GTB Enclave, Dilshad Garden, Delhi, India</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i className="ri-mail-line"></i>
                      </span>
                      Email:
                    </h6>
                    <p className='mb-0'>Amazingholidays@hotmail.com <br />
                    info@myamazingholidays.com</p>
                  </ListGroupItem>
                  <ListGroupItem  className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span>
                        <i className="ri-phone-line"></i>
                      </span>
                      Phone:
                    </h6>
                    <p className='mb-0'>+91 9354462202</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'> Copyright {year}, design and develop by Softiwo. All rights reserved.</p>
          </Col>
        </Row>
       </Container>
    </footer>
  )
}

export default Footer