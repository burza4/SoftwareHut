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
    let books = bookDB.books.sort((a, b) => (a.score < b.score ? 1 : -1));
    let i = 1;
    let ranking = books.map((x) => <li key = {x.id}> <RankPosition position = {i++} Book = {x}/> </li>)
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