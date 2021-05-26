import React from 'react';
import bookDB from '../../bookDB';
import NavPanel from '../../components/NavPanel';
import Tab from '../../components/Tab';


const Home = () =>{

    
    return(
        <div>
            <NavPanel />
            <div>
                <h1>Super Świetna Biblioteka</h1>
                <Tab title = "Hot"/>
                <Tab title = "Trending"/>
                <Tab title = "Fresh"/>
                <div id="test" /> 
            </div>
        </div>
        );
}



export default Home;