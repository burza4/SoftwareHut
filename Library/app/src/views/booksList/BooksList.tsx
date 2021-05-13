import React from 'react';  
import NavPanel from '../../components/NavPanel';
import Tile from '../../components/Tile';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({

    list: {
        
        display: 'flex',
        flex: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
 
    
});
const BooksList = () =>{
    const classes = useStyles();
    return(
        <div>
            <NavPanel />
            <h1>This is bookslist page</h1>
            <div className={classes.list}>
            <Tile Nr= '0' />
            <Tile Nr= '1' />
            <Tile Nr= '2' />
            <Tile Nr= '0' />
            <Tile Nr= '1' />
            <Tile Nr= '2' />
            </div>
            
        </div>
        );
}

export default BooksList;