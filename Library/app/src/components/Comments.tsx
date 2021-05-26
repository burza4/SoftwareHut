import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';
import Comment from './Comment';
import data from '../data/data.json'

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

const AddComment = (name: string, desc: string, date: string) => {
  var obj = data.books[0].comments;
  var keys = Object.keys(obj);
  var len = keys.length
  data.books[0].comments = [{ "id": len, "user": name, "content": desc, "time": date }, ...data.books[0].comments]
}

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
