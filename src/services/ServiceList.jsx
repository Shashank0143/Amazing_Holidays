import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from './../assets/images/weather.png'
import guideImg from './..//assets/images/guide.png'
import customizationImg from './..//assets/images/customization.png'

const serviceData =[
    
    {
        imgUrl: weatherImg,
        title: "Flight Booking",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl: guideImg,
        title: "Hotel Booking",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl: customizationImg,
        title: "Educational Trip",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl: customizationImg,
        title: "Group Tour",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl: customizationImg,
        title: "Honeymoon Package",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl: customizationImg,
        title: "Cruise Holidays",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        imgUrl: customizationImg,
        title: "MICE Specialist",
        desc: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
    },
]

const ServiceList = () => {
  return (
    <>
    {
        serviceData.map((item, index) =><Col lg='3' key={index}>
            <ServiceCard item = {item}/>
        </Col>)
    }
    </>
  )
}

export default ServiceList