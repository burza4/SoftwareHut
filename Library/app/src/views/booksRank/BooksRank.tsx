import React from 'react';
import NavPanel from '../../components/NavPanel';
import bookDB from '../../bookDB'
import RankPosition from '../../components/RankPosition'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    container:
    {
        margin: '0 10%',
        listStyleType: 'none',
    }
    
});
const BooksRank = () =>{
    let ranking = bookDB.books.map((x) => <li key ={x.id}> <RankPosition Nr = {x.id.toString()}/> </li> )
    const classes = useStyles();
    return(
        <div>
            <NavPanel />
            <div className = {classes.container}>
                <h1>Ranking</h1>
                {ranking}
            </div>
        </div>
        );
}
export default BooksRank;