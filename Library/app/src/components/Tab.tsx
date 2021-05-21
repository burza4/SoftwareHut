import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';
import Tile from './Tile';

interface TieProps {
    Nr: string;
    title: string;
}



const useStyles = makeStyles({


    tab: {

        borderRadius: '25px',
        padding: '10px',
        margin: '15px',
        background: 'rgb(255,255,0,0.5)',
        border: '3px solid rgb(0,0,0,0.5)',
        alignItems: 'center',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        

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
    let ranking = bookDB.books.map((x) => <div className={classes.positon} > <Tile Nr={x.id.toString()} /> </div>);

    let list: any[] = [];

    for (let i = 0; i < 3; i++) {
        list = [...list, ranking[i]]
    }
    return (

        <div className={classes.tab}>
            <div className={classes.title}>{title}</div>
            <div className={classes.list}>
                {list}
            </div>

        </div>
    )
};


export default Tab;
