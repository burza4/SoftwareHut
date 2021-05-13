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
    comment: {
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        background: 'rgb(255,255,0,0.5)',
        border: '3px solid rgb(0,0,0,0.5)', 
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    user:
    {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '3px 0',
    },
    text:
    {
      margin: '3px 0',
    },
    date:{
      textAlign: 'right',
      margin: '3px 0',
    }
});


const Comment :React.FC<TieProps> = ({Nr})=> {

    const classes = useStyles();
    return (
        
      <div className = {classes.comment}>
        <div className = {classes.user}> 
            Użytkownik: {bookDB.books[parseInt(Nr)].comments[0].user}
          </div>
          <div className = {classes.text}> 
         {bookDB.books[parseInt(Nr)].comments[0].content}
        </div>
        <div className = {classes.date}> 
         {bookDB.books[parseInt(Nr)].comments[0].time}
        </div>
      </div>
      
    );
  };


export default Comment;
