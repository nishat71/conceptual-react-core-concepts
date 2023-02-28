import React, { useState } from 'react';
import './Counter.css'

// const Counter = () => {
//     // const data = useState("Name"); //here data is array, array k distructuring kora jay
//     const [count, setCount] = useState(0); //here data is array, array k distructuring kora jay
//     // console.log(name);

//     const handleAdd = () => {
//         setCount(count + 1);
//     }
//     const handleMinus= () => {
//         setCount(count - 1);
//     }

//     return (
//         <div className='name'>
//             <h1>{count}</h1>
//             <button onClick={handleAdd}>Add</button>
//             <button onClick={handleMinus}>Minus</button>
//         </div>
//     );
// };


const Counter = (props) => {
    const { count, handleAdd, handleMinus } = props;
    console.log(props);
    return (
        <div className='name'>
            <h1>Count : {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    );
};

export default Counter;
//state er initial value string/number deya jay...pore jodi user chay taile ta change krte pare interaction kore
// state app.js e declare kore o ekane data pass krte pari, ekibabe function o pass kore dite pari

/* chaile nijessho component e kaj krte pari, abr chaile app.js e declare kore diye pass kore diye o kaj krte pari that means
component er sate component er relation data passing er maddome hocche 

component er sate props dealing kubi powerful
*/