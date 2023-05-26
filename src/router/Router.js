import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

//Importing all pages
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import ToursDetails from '../pages/TourDetails';
import SearchResults from '../pages/SearchResults';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ThankYou from '../pages/ThankYou';
import About from '../pages/About';
const Router = () => {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to = '/home'/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/thank-you' element = {<ThankYou/>}/>
        <Route path='/tours' element = {<Tours/>}/>
        <Route path='/tours/:id' element = {<ToursDetails/>}/>
        <Route path='/tours/search' element = {<SearchResults/>}/>
    </Routes>
  )
}

export default Router