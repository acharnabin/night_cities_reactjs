import React from 'react'
import '../css/skillitem.css'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 10,
    borderRadius: 5,
  },
});



const Skillitem = (props) => {
    const classes = useStyles();
  
    return (
        <div className="skill_item card">
            <div className="item_desc">
                <h3>{props.title}</h3>
                <img src={props.image} alt=""/>
            </div>
            <div className={classes.root}>
            <LinearProgress variant="determinate" value={50} />
            </div>
        </div>
    )
}

export default Skillitem
