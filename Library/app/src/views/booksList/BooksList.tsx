import React from 'react';  
import NavPanel from '../../components/NavPanel';
import Tile from '../../components/Tile';
import {makeStyles} from '@material-ui/core/styles';
import bookDB from '../../bookDB';


const useStyles = makeStyles({

    list: {
        
        display: 'flex',
        flex: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    positon: {
        display: 'flex',
        flexDirection: 'column',
    },
    
});
const BooksList = () =>{
    const classes = useStyles();
    let ranking = bookDB.books.map((x) => <div className={classes.positon} key={x.id} > <Tile Book={x} /> </div>);
    return(
        <div>
            <NavPanel />
            <h1>This is bookslist page</h1>
            <div className={classes.list}>
            {ranking}

            </div>
            
        </div>
        );
}

export default BooksList;