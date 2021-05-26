import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';

interface TieProps {
    Book: {
        id: number;
        title: string;
        author: string;
        img: string;
        score: number;
        publicationDate: number,
        comments: {
            id: number;
            user: string;
            content: string;
            time: string;
        }[];
    };   
}

const useStyles = makeStyles({

    tile: {
        width: '450px',
        height: '400px',
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        background: 'rgb(243, 226, 96)',
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


const Tile :React.FC<TieProps> = ({Book,children})=> {

    const history = useHistory();
    const classes = useStyles();
    return (
      <div className= { classes.tile} onClick={() => history.push(`/book/${Book.id}`)}>
          <img className= { classes.cover}
            src= {Book.img}
            alt= 'zdjecie'
      />
      <h2>{Book.title}</h2>
      <h3>{Book.author}</h3>
      </div>
    );
  };


export default Tile;
