import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';
import Tile from './Tile';

interface TieProps {
    title: string;
}

const useStyles = makeStyles({


    tab: {

        borderRadius: '25px',
        padding: '10px',
        margin: '15px',
        background: 'rgb(245, 234, 146)',
        border: '3px solid rgb(0,0,0,0.5)',
        alignItems: 'center',
    },
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
        fontSize: '75px',
        textShadow: '32px',
    }

});


const Tab: React.FC<TieProps> = ({ title }) => {

    const classes = useStyles();
    let books;
    // This doesn't account for if names are the same between objects
    if(title === "Hot"){
        books = bookDB.books.sort((a, b) => (a.score < b.score ? 1 : -1));
    }
    else if(title === "Trending"){
        books = bookDB.books.sort((a, b) => (a.comments.length < b.comments.length ? 1 : -1));
    }
    else{
        books = bookDB.books.sort((a, b) => (a.publicationDate < b.publicationDate ? 1 : -1));
    }
    bookDB.books.sort((a, b) => (a.id > b.id ? 1 : -1));
    let ranking = books.map((x) => <div className={classes.positon} key={x.id} > <Tile Book={x} /> </div>);
    return (

        <div className={classes.tab}>
            <div className={classes.title}>{title}</div>
            <div className={classes.list}>
                {ranking}

            </div>

        </div>
    )
};


export default Tab;
