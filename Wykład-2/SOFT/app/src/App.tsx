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
  const liczbaMniejszaOdZera = (liczba:number) => {
    if(liczba<0){
      return (<div> liczba jest wieksza od 0</div>);
    }
  }
  return (
    <div className="App">
      <CustomHeader>
        <Counter onNumberChange={handleNumberChange}/>
        {
          changedNumber >0 && (<div> liczba jest wieksza od 0</div>)
        }
        {liczbaMniejszaOdZera(changedNumber)}
      </CustomHeader>
    </div>
  );
}


export default App;
