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
    desc: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '80%',
        margin: '10px 0 0 0',
    },
    text: {
      margin: '5px 0',
    }
});


const Description :React.FC<TieProps> = ({Nr})=> {

    const classes = useStyles();
    return (
      <div className = {classes.desc}>
         <h3 className = {classes.text}>Tytuł: {bookDB.books[parseInt(Nr)].title}</h3>
         <p className = {classes.text}>Autor: {bookDB.books[parseInt(Nr)].author}</p>
         <p className = {classes.text}>Ocena: {bookDB.books[parseInt(Nr)].score} </p>
         <p className = {classes.text}>Opis:</p>
         <p className = {classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  };


export default Description;
