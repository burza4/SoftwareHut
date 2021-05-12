import React from 'react';
import { useParams } from 'react-router';
import NavPanel from '../../components/NavPanel';

interface MovieRouteParams {
    id: string;
}

const Book = () =>{
    
    const { id } = useParams<MovieRouteParams>();
    return(
        <div>
            <NavPanel />
            {`This is book page with id: ${id}` }
        </div>
        );
}

export default Book;