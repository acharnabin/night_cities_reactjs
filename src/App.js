import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Project from './components/Project'
import Skills from './components/Skills'
import my_photo from './assets/my_photo.png'
const App = () => {
    useEffect(() => {
        Aos.init({duration:1000})
      }, [])
    return (
        <div className="app shadow">
        <div className="">
            
        <div className="app_content ">
            <div className="row container-fluid app_content_hero">
            <Navbar/>
                <Hero/>
            </div>

            <div className="row  app_content_project container-fluid">
            <h1 className="text-center">Portfolio</h1>
            <h5 className="text-center">Check out my portfolio to see some of my recent personal work.</h5>
            <div className="project_items">
                <Project/>
                </div>
            </div>

            <div className="row  app_content_skill container-fluid ">
                <Skills/>
            </div>

            <div className="row  app_content_about container-fluid ">
                <div className="about_info row container">
                    <div className="col-xs-8 col-md-8 col-sm-12 col-sm-order-1 order-2 about_text" >
                        <h1 data-aos="fade-up">About Me</h1>
                        <h5 data-aos="fade-down">I am <span className="bold">Nabin Achar</span>,3rd year student of computer science and technology, central calcutta polytechnic.I love web development and competitve programming.I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen.</h5>
                    </div>
                    <div className="col-xs-4 col-md-4 col-sm-12 col-sm-order-2 order-1 about_img" data-aos="fade-up">
                        <img src={my_photo} alt=""/>
                    </div>
                </div>
            </div>

            <div className="app_footer">
                
            </div>
        </div>
        </div>
           
        
            
        </div>
    )
}

export default App
