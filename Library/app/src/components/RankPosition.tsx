import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


interface TieProps {
    position: number;
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
    container: {
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        background: 'rgb(245, 234, 146)',
        border: '3px solid rgb(0,0,0,0.5)', 
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'left',
    },
    desc:
    {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    cover: {
        width: '100px',
        height:'100%',
        padding: '10px',
        textAlign: 'left',
    },
    text: {
      margin: '5px 0',
    },
    position: {
      fontSize: '3rem',
      fontStyle: 'bold',
    }
});


const RankPosition :React.FC<TieProps> = ({position, Book})=> {

    const classes = useStyles();

    return (
      <div className = {classes.container}>
        <div className = {classes.position}>{position}</div>
        <img className= { classes.cover}
            src= {Book.img}
            alt= 'zdjecie'
        />
        <div className = {classes.desc}>
         <h3 className = {classes.text}>Tytuł: {Book.title}</h3>
         <p className = {classes.text}>Autor: {Book.author}</p>
         <p className = {classes.text}>Ocena: {Book.score} </p>
        </div>
      </div>
      
    );
  };


export default RankPosition;
