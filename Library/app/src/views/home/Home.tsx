import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavPanel from '../../components/NavPanel';
import Tab from '../../components/Tab';
import '../../fonts/OdibeeSans-Regular.ttf'; 

const useStyles = makeStyles({
    title:
    {
        margin: '0 10%',
        fontSize:'100px',
        color: '#800000',
        fontFamily: 'OdibeeSans-Regular',
        listStyleType: 'none',
    }
    
});

const Home = () =>{

    const classes = useStyles();
    
    return(
        <div>
            <NavPanel />
            <div>
                <div className={classes.title}>BOOKWEB</div>
                <Tab title = "Hot"/>
                <Tab title = "Trending"/>
                <Tab title = "Fresh"/>
                <div id="test" /> 
            </div>
        </div>
        );
}



export default Home;