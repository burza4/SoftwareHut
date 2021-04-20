import React from 'react';
import ChangeButton from './ChangeButton';
import { addNumber } from './CustomHeader';

interface CounterProps {
    initialNumber?: number;
    onNumberChange: (someNumber: number) => void;
}

const Counter: React.FC<CounterProps> = ({initialNumber,onNumberChange}) => {
    const [counterNumber,setCounterNumber] = React.useState(initialNumber || 0);

    const obj = {a: 1,b: 2};
    const {a,b} = obj;
    
    const addNumber = () =>{
        const number = counterNumber +1;
        setCounterNumber(number);
        // if(onNumberChange){
        //     onNumberChange(number)
        // } is equal to:
        onNumberChange && onNumberChange(number);
    }
    const decreaseNumber = () =>{
        const number = counterNumber -1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }
    const resetNumber = () =>{
        setCounterNumber(initialNumber || 0);
        onNumberChange && onNumberChange(initialNumber || 0);
    }

    const ifNumber = (_number:number)=>{
        if(_number>15)
        {
            return (<div> Liczba przekroczona</div>);
        }
        if(_number>10){
            return (<div> liczba jest wieksza od 10</div>);
        }  
        if(_number<-10){
            return (<div> liczba jest mniejsza od -10</div>);
        }
    }
    return (
        <div>
            <ChangeButton Change={addNumber}>+</ChangeButton>
            {counterNumber}
            <ChangeButton Change={decreaseNumber}>-</ChangeButton>
            <ChangeButton Change={resetNumber}>RESET</ChangeButton>
            {ifNumber(counterNumber)}


        </div>
    );
}

export default Counter;