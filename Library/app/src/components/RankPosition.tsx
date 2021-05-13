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
    container: {
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        background: 'rgb(255,255,0,0.5)',
        border: '3px solid rgb(0,0,0,0.5)', 
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
    },
    desc:
    {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    cover: {
        width: '90px',
        height:'auto',
        padding: '10px',
        textAlign: 'left',
    },
    text: {
      margin: '5px 0',
    }
});


const RankPosition :React.FC<TieProps> = ({Nr})=> {

    const classes = useStyles();
    return (
      <div className = {classes.container}>
        <img className= { classes.cover}
            src= {bookDB.books[parseInt(Nr)].img}
            alt= 'zdjecie'
        />
        <div className = {classes.desc}>
         <h3 className = {classes.text}>Tytuł: {bookDB.books[parseInt(Nr)].title}</h3>
         <p className = {classes.text}>Autor: {bookDB.books[parseInt(Nr)].author}</p>
         <p className = {classes.text}>Ocena: {bookDB.books[parseInt(Nr)].score} </p>
        </div>
      </div>
      
    );
  };


export default RankPosition;
