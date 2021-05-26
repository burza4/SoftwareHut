import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useHistory } from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import ChangeButton from './ChangeButton';
import { Book } from '@material-ui/icons';
import bookDB from '../bookDB';


const useStyles = makeStyles({

    drawer: {
        width: '100%',
        background: 'rgb(245, 234, 146)',
        display: 'flex',
        justifyContent: 'space-between',

    },
    menuIcon: {
        cursor: 'pointer',
        display: 'flex',
        margin: '1rem',
    },
    pages: {
        display: 'flex',
        flexDirection: 'row',
    },
    page:{
        margin: '0 1.5rem',
        listStyleType: 'none',
        borderRadius: '5px',
        border: '3px solid rgb(0,0,0,0.5)',
        padding: '5px',
        background: 'rgb(128,128,128,0.5)',

    }
});

const NavPanel = () => {
    const[isOpen,setIsOpen] = React.useState(false);
    const history = useHistory();
    const classes = useStyles();
    const redirectTo = (path: string, name: string) =><div onClick={()=>{ history.push(path) }}>{name}</div>
    let randomBook = (Math.floor(Math.random() * (bookDB.books.length)));

    return (
        <div>
            <div className= { classes.menuIcon} onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
            </div>
           
            <Drawer 
                open={isOpen}
                onClose={() => {setIsOpen(false)}}
                anchor= 'top'
                
            >
                <div className={classes.drawer}>
                    <ul className={classes.pages}>
                        <li className={classes.page}>{redirectTo('/', 'Home')}</li>
                        <li className={classes.page}> {redirectTo('/booksList', 'BooksList')}</li>
                        <li className={classes.page}>{redirectTo('/booksRank', 'BooksRank')}</li>
                    </ul>
                    <ChangeButton Change={() => history.push(`/book/${randomBook}`)} >Easter Egg</ChangeButton>
                </div>
            </Drawer>
        </div>
    );
  };

  export default NavPanel;