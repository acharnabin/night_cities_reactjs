import React,{useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/project.css'



const Projectitem=(props)=> {
  useEffect(() => {
    Aos.init({duration:800})
  }, [])

  return (
    
     <Card className="project_item_class" 
      data-aos="fade-up"
         
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
          title={props.title}
          data-aos="fade-down"
          
        />
        <CardContent className="cardcontent">
        
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href={props.live}>
      <Button size="small" style={{padding:'5px 10px',border:'1px solid #E71D36'}}>
          Go to site
        </Button>
      </a>
      <a href={props.github}>

        <Button size="small" style={{padding:'5px 10px',border:'1px solid #FF9F1C'}}>
          Github
        </Button>
      </a>
        
        
      </CardActions>
    </Card>
   
  );
}

export default Projectitem;