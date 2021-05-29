import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bookDB from '../bookDB';
import Tile from './Tile';
import '../fonts/OdibeeSans-Regular.ttf'; 
interface TieProps {
    title: string;
}

const useStyles = makeStyles({

    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    positon: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '45px',
        textShadow: '32px',
        fontFamily: 'OdibeeSans-Regular',
    },
    hr: {
        width:'80%',
        
    }

});


const Tab: React.FC<TieProps> = ({ title }) => {

    const classes = useStyles();
    let books;
    if(title === "Hot"){
        books = bookDB.books.sort((a, b) => (a.score < b.score ? 1 : -1));
    }
    else if(title === "Trending"){
        books = bookDB.books.sort((a, b) => (a.comments.length < b.comments.length ? 1 : -1));
    }
    else{
        books = bookDB.books.sort((a, b) => (a.publicationDate < b.publicationDate ? 1 : -1));
    }

    let ranking = books.slice(0, 3).map((x) => <div className={classes.positon} key={x.id} > <Tile Book={x} /> </div>);
    bookDB.books.sort((a, b) => (a.id > b.id ? 1 : -1));
    return (

        <div >
            <div className={classes.title}>{title}</div>
            <hr className={classes.hr}/>
            <div className={classes.list}>
                {ranking}

            </div>

        </div>
    )
};


export default Tab;
