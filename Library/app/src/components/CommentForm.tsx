import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { title } from 'node:process';
import { Opacity } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import bookDB from '../bookDB';

interface TieProps2 {
    db: {
        id: number;
        title: string;
        author: string;
        img: string;
        score: number;
        comments: {
            id: number;
            user: string;
            content: string;
            time: string;
        }[];
    }
    nr: string;
}



const useStyles = makeStyles({
    form: {
        borderRadius: '25px',
        padding: '10px',
        margin: '10px',
        background: 'rgb(255,255,0,0.5)',
        border: '3px solid rgb(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    content:
    {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '3px 0',
    },
    text:
    {
        margin: '3px 0',
    },
    date: {
        textAlign: 'right',
        margin: '3px 0',
    },
    tb: {
        width: "80%",
        height: '100px',
        margin: '3px 0',
    }
});




const CommentForm: React.FC<TieProps2> = ({ db, nr }) => {

    const AddComment = (name:string,desc:string,date:string) => {
        var obj = db.comments;
        var keys = Object.keys(obj);
        var len = keys.length
        db.comments =  [ {"id":len,"user":name,"content":desc,"time":date},...db.comments]
      }

    const fun = () => {
        AddComment("annonymous","xD","teraz");
    }
    const classes = useStyles();
    return (

        <div className={classes.form}>
            <div className={classes.content}>
                <form>
                    <label>
                    <textarea  className={classes.tb}  name="name" />
                    </label>
                    <br></br>
                    <button  onClick = {() =>fun()}  >Dodaj komentarz</button>
                </form>
            </div>
        </div>

    );
};


export default CommentForm;
