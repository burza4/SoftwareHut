import React from 'react';
import { useParams } from 'react-router';
import NavPanel from '../../components/NavPanel';

interface BookRouteParams {
    id: string;
}
const Book = () =>{
    const { id } = useParams<BookRouteParams>();

    return(
         <div>
             <NavPanel />
           <div> {`This is book page with id: ${id}`} </div>
         </div>)
}

export default Book;