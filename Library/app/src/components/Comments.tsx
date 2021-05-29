import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  let comment = Comments.map((x: X) =>

    <li key={x.id}>
      <Comment com={Comments[x.id]} />
    </li>

  )

  const classes = useStyles();
  return (

    <div className={classes.listCom}>
      {comment}

    </div>

  );
};

export default Comments;
