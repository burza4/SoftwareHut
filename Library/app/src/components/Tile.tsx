import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router';

interface TieProps {
    Book: {
        id: number;
        title: string;
        author: string;
        img: string;
        score: number;
        publicationDate: number,
        comments: {
            id: number;
            user: string;
            content: string;
            time: string;
        }[];
    };   
}

const useStyles = makeStyles({

    tile: {
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        transition: 'all 0.5s',
        "&:hover": {
            opacity: '0.2',
            cursor: 'pointer'
        },
        
    },

    cover: {
        width: '260px',
        height:'400px',
        padding: '10px',
        margin: '10px',
    }
    
    
});


const Tile :React.FC<TieProps> = ({Book,children})=> {

    const history = useHistory();
    const classes = useStyles();
    return (
      <div className= { classes.tile} onClick={() => history.push(`/book/${Book.id}`)}>
          <img className= { classes.cover}
            src= {Book.img}
            alt= 'zdjecie'
      />

      </div>
    );
  };


export default Tile;
