import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';

interface TieProps {
    Nr: string;
}

const useStyles = makeStyles({


    tile: {
        width: '450px',
        height: '400px',
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        background: 'rgb(255,255,0,0.5)',
        border: '3px solid rgb(0,0,0,0.5)',
        transition: 'all 0.5s',
        "&:hover": {
            
            opacity: '0.2',
            cursor: 'pointer'
        },
        
    },

    cover: {
        width: '130px',
        height:'200px',
        padding: '10px'
    }
    
    
});


const Tile :React.FC<TieProps> = ({Nr,children})=> {

    const history = useHistory();
    const classes = useStyles();
    return (
      <div className= { classes.tile} onClick={() => history.push(`/book/${Nr}`)}>
          <img className= { classes.cover}
            src= {bookDB.books[parseInt(Nr)].img}
            alt= 'zdjecie'
      />
      <h2>{bookDB.books[parseInt(Nr)].title}</h2>
      <h3>{bookDB.books[parseInt(Nr)].author}</h3>
      </div>
    );
  };


export default Tile;
