import React from 'react';
import NavPanel from '../../components/NavPanel';
import Tab from '../../components/Tab';

const Home = () =>{
    
    return(
        <div>
            <NavPanel />
            <div>
                <h1>Super Świetna Biblioteka</h1>
                <Tab Nr= {"0"} title = "Hot"/>
                <Tab Nr= {"0"} title = "Trending"/>
                <Tab Nr= {"0"} title = "Fresh"/>
                <div id="test" /> 
            </div>
        </div>
        );
}



export default Home;