import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/skill.css'


const Skills = () => {
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
    return (
     
<>

      <section className="container-fluid row">
   
        <div class="skill_container">
      
          <div class="left" data-aos="slide-left">
              My Skills
          </div>
          
          
          <div class="right" data-aos="slide-right">
        
            <div class="content">
                <img src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" alt=""/>
                <img src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/22-512.png" alt=""/>
                <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" alt=""/>
                <img src="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" alt=""/>
              
            </div>
            
          </div>
        
        </div>
      </section>




</>
    )
}

export default Skills
