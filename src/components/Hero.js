import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/hero.css'
import hero from '../assets/hero.png'
import EmailIcon from '@material-ui/icons/Email';
const Hero = () => {
    useEffect(() => {
        Aos.init({duration:1000})
      }, [])

    return (
        <div className="hero_section container row" >
            <div className="col-xs-7 col-md-7 col-sm-12 col-sm-order-2 order-1 hero_text " data-aos="slide-right">
            
    
                <h1 className="" >Creative Solutions</h1>
                <h5 className="mt-2" data-aos="fade-up" data-aos-delay="1050" data-aos-anchor=".example-selector">An independent web developer providing my clients with best work, collaboration & experience.Interested in working on something awesome together?</h5>
                <button className="mt-2" data-aos="fade-up" data-aos-delay="1100" data-aos-anchor=".example-selector"><EmailIcon/><span className="mx-2">nabinacharofficial@gmail.com</span></button>
            </div>
            <div className="col-xs-5 col-md-5 col-sm-12 col-sm-order-2 order-1 hero_text hero_image" data-aos="slide-left">
                <img src={hero} alt="" className="hero-animated-img"/>
            </div>
        </div>
    )
}

export default Hero
