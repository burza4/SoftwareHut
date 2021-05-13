import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';
import Comment from './Comment';

interface TieProps {
    Nr: string;
}

const useStyles = makeStyles({
    listCom: {
        listStyleType: 'none',
    }
});



const Comments :React.FC<TieProps> = ({Nr})=> {
let comment = bookDB.books[parseInt(Nr)].comments.map((x) => <li key ={x.user}> <Comment Nr = {x.id.toString()}/> </li> )
    
    const classes = useStyles();
    return (
       
      <div className = {classes.listCom}>
          {comment}
      </div>
      
    );
  };


export default Comments;
