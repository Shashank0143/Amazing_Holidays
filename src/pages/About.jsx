import React from 'react'
import CommonSectin from '../Shared/CommonSectin'
import { Container, Row, Col } from 'reactstrap'
import '../style/about.css'
import styled from 'styled-components'
import Subtitle from '../Shared/Subtitle'
import MasonyImagesGallery from '../components/Image-gallery/MasonyImagesGallery'

const HR = styled.hr`
color: #003170;
height: 1px;
background: #003170;
width: 50%;
margin-left: auto;
margin-right: auto;
`;
const About = () => {
  return (
    <>
    <section>
    <CommonSectin title={"About Us"}/>
    <Container>
        <Row>
            <Col className='about__section'>
            <h1>Experience the Excellence</h1>
            <HR/>
            <p>Amazing Holidays is one of the Amazing tavel company in Delhi which offers tours for all parts of india. We have our destination expert for all important destinations in india and abroad. Our journey started in 1995 with a prime motive of providing Amazing services to all our guest. we take our guest as our family member and always suggest them what is correct and moral staisfaction is more important for us than monetary profit. Come explore Amazing india with Amazing Holidays and Experience the excellence.</p>
            </Col>
        </Row>
    </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonyImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default About