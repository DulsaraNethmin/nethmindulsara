import React from "react"
import Header from "./component/Head/Navbar"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from "./component/Head/Navbar";
import {Space} from 'antd';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <Space/>
      <Features />
      <Space/>
      <Portfolio />
      <Space/>
      <Blog />
      <Space/>
      <Contact />
      <Space/>
      <Footer />
    </>
  )
}

export default App
