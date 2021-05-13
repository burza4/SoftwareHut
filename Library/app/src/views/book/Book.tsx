import React from 'react';
import { useParams } from 'react-router';
import NavPanel from '../../components/NavPanel';
import {makeStyles} from '@material-ui/core/styles';
import bookDB from '../../bookDB';
import Description from '../../components/Description';
import Comments from '../../components/Comments';

interface BookRouteParams {
    id: string;
}
const useStyles = makeStyles({

    page: {
        margin: '0 10%',
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        width: '260px',
        height:'400px',
        padding: '10px',
    },
     desc: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
     }
});

const Book = () =>{
    const classes = useStyles();
    const { id } = useParams<BookRouteParams>();
    return(
        <div>
            <NavPanel />
            <h1>{`This is "${bookDB.books[parseInt(id)].title}" page` }</h1>
            <div className= {classes.page}>
                <div className={classes.desc}>
                    <img className= { classes.cover}
                    src= {bookDB.books[parseInt(id)].img}
                    alt= 'zdjecie'
                     />
                      <div>
                          <Description Nr = {id} />
                      </div>
                </div>
                <div>
                <Comments Nr = {id} />
                </div>
            </div>
        </div>
        );
}

export default Book;