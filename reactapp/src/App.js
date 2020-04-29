import React, { Component } from 'react'
/* eslint-disable */
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Groups from './components/Groups/Groups'
import HomePage from './components/HomePage/HomePage'
import Items from './components/Items/Items'
import Contact from './components/Contact/Contact'

import AboutIMG from './pictures/me.png'
import UMassIMG from './pictures/umass.png'
import NqhsIMG from './pictures/nqhs.jpg'
import FidelityIMG from './pictures/fidelity.png'
import PhilipsIMG from './pictures/philips.PNG'

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Navbar/>
          <HomePage/>
          <div className = "container">
            <section id = "about">
              <Groups groupName = "ABOUT"/>
              <Items  imgg = {AboutIMG} name = "Welcome!" p = "Hello! I'm Taren, currently an undergraduate student located in Boston. I have a wide variety of interests. Right now I am looking for internship oppertunities in Software Development, Data Analysis, or Program Management for either Spring 2021 or Summer 2021. I am also open to relocating!"/>
            </section>
            <section id = "education">
              <Groups groupName = "EDUCATION"/>
              <Items  imgg = {UMassIMG} name = "University of Massachusetts Lowell" date = "(Sept. 2017 - Present)"/>
              <Items  imgg = {NqhsIMG} name = "North Quincy High School" date = "(Sept. 2013 - June 2017)"/>
            </section>
            <section id = "experience">
              <Groups groupName = "EXPERIENCE"/>
              <Items  imgg = {FidelityIMG} name = "Software Engineer Intern" date = "(June 2020 - Aug. 2020)"/>
              <Items  imgg = {PhilipsIMG} name = "Software Engineer Intern" date = "(June 2019 - Dec. 2019)"/>
            </section>
            <section id = "contact">
              <Groups groupName = "CONTACT"/>
              <Contact/>
            </section>
          </div>
          <Footer/>
        </div>
      );
    }
}

export default App;
