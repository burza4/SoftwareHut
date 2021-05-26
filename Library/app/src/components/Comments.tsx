import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';
import Comment from './Comment';

interface TieProps {
  Nr: string;
  Comments: Array<X>


}
type X = {
  id: number;
  user: string;
  content: string;
  time: string;
}
const useStyles = makeStyles({
  listCom: {
    listStyleType: 'none',
  }
});


const Comments: React.FC<TieProps> = ({ Nr, Comments }) => {
  let i = 0;
  let comment = Comments.map((x: X) => 
    
    <li key={x.id}>
       <Comment com={Comments[x.id]} />
        </li>
   
  )

  const classes = useStyles();
  return (

    <div className={classes.listCom}>
      {comment}
      {/* {<Comment Comments.map(component => <Component data={comment}/>)} */}

    </div>

  );
};


export default Comments;
