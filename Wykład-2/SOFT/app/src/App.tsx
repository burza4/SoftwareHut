import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomHeader from './components/CustomHeader'
import Counter from './components/Counter';
import { Console } from 'node:console';

const App = () => {
  const abc = 'test';
  const [changedNumber,setChangeNumber] = React.useState(0);
  const handleNumberChange = (newNumber:number) => {
    console.log(newNumber)
  }

  
  return (
    <div className="App">
      <CustomHeader>
        <Counter initialNumber={0} onNumberChange={handleNumberChange}/>
        {/* {
          changedNumber >10 && (<div> liczba jest wieksza od 10</div>)
        } */}

        {/* {liczbaMniejszaOdZera(changedNumber)} */}
      </CustomHeader>
    </div>
  );
}


export default App;
