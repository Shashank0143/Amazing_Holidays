import React from 'react'
import '.././style/home.css'
import {Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '.././assets/images/hero-img02.jpg'
import heroVideo from '.././assets/images/hero-video.mp4'
import worldImg from '..//assets/images/world.png'
import Subtitle from '..//Shared/Subtitle'
import SearchBar from '../Shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Featured-tours/FeaturedTourList'
//import experienceImg from '.././assets/images/experience.png'
import MasonyImagesGallery from '../components/Image-gallery/MasonyImagesGallery'
//import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../Shared/Newsletter'



const Home = () => {
  return (
    <>
    {/* ======== hero section starts ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before  You Go'}/>
                <img src={worldImg} alt="World" />
              </div>
              <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
              <p>The desire of spending quality time with family or Partner  while on tour is one that we at Amazing  strive to fulfil.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="Image1" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="Video1" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="Image2" />
            </div>
          </Col>
          {/* <SearchBar/> */}
        </Row>
      </Container>
    </section>
    {/* ======== hero section ends ======= */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/* ======= featured tour section start ======= */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
           <Subtitle subtitle={'Explore'}/>
           <h2 className="featured__tour-title">Our Features Tours</h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/* ======= featured tour section end ======= */}

    {/* ======= experience section start ======= */}
    {/*<section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>With our all experience <br />we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               <br /> Quis doloremque rem, laudantium hic doloribus amet.</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Sucessfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Reguar clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </Col>

          <Col lg = '6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
  </section>*/}
    {/* ======= experience section end ======= */}

    {/* ======= gallery section start ======= */}

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
    {/* ======= gallery section end ======= */}

    {/* ======= testimonial section start ======= */}
    {/*<section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fan Love'}/>
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials/>
          </Col>
        </Row>
      </Container>
</section>*/}
    {/* ======= testimonial section start ======= */}
    <Newsletter/>
    </>
  )
}

export default Home