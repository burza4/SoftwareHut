import { Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useHistory } from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import ChangeButton from './ChangeButton';

const useStyles = makeStyles({

    drawer: {
        width: '100%',
        background: 'pink',
    },
    menuIcon: {
        cursor: 'pointer',
        display: 'flex',
    }
});

const NavPanel = () => {
    const[isOpen,setIsOpen] = React.useState(false);
    const history = useHistory();
    const classes = useStyles();
    const redirectTo = (path: string, name: string) =><div onClick={()=>{ history.push(path) }}>{name}</div>
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
                    <ul>
                        <li>{redirectTo('/', 'Home')}</li>
                        <li>{redirectTo('/book/1', 'Book')}</li>
                        <li>{redirectTo('/booksList', 'BooksList')}</li>
                        <li>{redirectTo('/booksRank', 'BooksRank')}</li>
                    </ul>
                    <ChangeButton Change={() => history.push('/booksList')} > xDD</ChangeButton>
                </div>
            </Drawer>
        </div>
    );
  };

  export default NavPanel;