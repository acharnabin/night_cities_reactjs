import React from 'react'
import '../css/project.css'
import Projectitem from './Project_item'
import Pagination from '@material-ui/lab/Pagination';
import nightcities from '../assets/nightcities.png'
import firstgame from '../assets/firstgame.png'
import netflix from '../assets/netflix.png'
import ecommarce from '../assets/ecom.png'
const Project = () => {
    
    return (
        
        <div className="project_class container">
            <Projectitem
                title="Night Cities"
                image={nightcities}
                live="https://acharnabin.github.io/night_cities_reactjs/"
                github="https://github.com/acharnabin/night_cities_reactjs"
                desc="A event booking website made with react js, bootstrap. It is non responsive."
            />

            <Projectitem
                title="Ecommarce Clone"
                image={ecommarce}
                live="https://acharnabin.github.io/ecommarce_design/"
                github="https://github.com/acharnabin/ecommarce_design"
                desc="A Ecommarce website design made with react js, bootstrap having cart page,order page product page. It is  responsive."
            />

            <Projectitem
                title="Netflix clone"
                image={netflix}
                live="https://acharnabin.github.io/netflix-clone/"
                github="https://github.com/acharnabin/netflix-clone/"
                desc="A Netflix website made with react js, bootstrap having welcome,sign in ,profile page. It is non responsive."
            />

            

            {/* <Pagination count={2} color="primary" /> */}
        </div>
        
    )
}

export default Project
