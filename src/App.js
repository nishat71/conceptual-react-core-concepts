import { useState } from 'react';
import './App.css';
import AllGun from './Components/AllGun/AllGun';
import Navbar from './Components/Navbar/Navbar';
import AllGunDemo from './Components/AllGunDemo/AllGunDemo';
// import Counter from './Components/Counter/Counter';
// import Test from './Components/Test/Test';
// import Test2 from './Components/Test2/Test2';


function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Navbar count={count}></Navbar>
      {/* <AllGun countIncrease={countIncrease}></AllGun> */}
      <AllGunDemo></AllGunDemo>
      {/* <h1 className='text-center text-4xl font-bold'>hello</h1>
      <button className="btn btn-primary">Button</button> */}
    </div>
  );
}





// function App() {
//   const [count, setCount] = useState(0);

//   const handleAdd = () => {
//     setCount(count + 1);
//   }
//   const handleMinus = () => {
//     setCount(count - 1);
//   }
//   return (
//     <div>
//       {/* <Test name="Rokib"></Test> */}
//       <Counter count={count} handleAdd={handleAdd} handleMinus={handleMinus}></Counter>
//     </div>
//   );
// }


// function App() {
//   const myName = 'Rokib';
//   const obj = {
//     myName: 'Rokib',
//     age: 21,
//     favPerson: 'ALIA'
//   };
//   const number = [10, 15, 67];
//   return (
//     <div className="">
//       {/* <h1>Hello {myName}</h1>
//      <h1>Age {obj.age}</h1>
//      <p>MyAge {number[0]}</p> */}
//       {/* <Greet age="21"></Greet> */}
//       <Greet name={obj.myName} friend={obj.favPerson} />

//     </div>
//   );
// }

// function Greet(props) {
//   console.log(props);
//   const { name, age, friend } = props;
//   return (
//     <div>
//       <h1>Hello from {name}</h1>
//       <h1>{`My name is ${name}, My friend is : ${friend}`}</h1>
//       {/* jsx er modde template string */}
//     </div>
//   )
// }




// function App() {
//   // const names = ["sakib", "tamim", "rafiq"];
//   const names = [
//     {name:"sakib", job:"cricket"},
//     {name:"messi", job:"football"},
//     {name:"monika", job:"football"},
//   ];
//   return (
//     <div>
//       {
//         names.map((name) =>(
//           <Greet name = {name.name}/>)
//         )
//       }
//     </div>
//   );
// }


// function Greet(props) {
//   const { name} = props;
//   return (
//     <div>
//       <h1>{`My name is ${name}`}</h1>
//       {/* jsx er modde template string */}
//     </div>
//   )
// }


export default App;


//object er value dite pari
// array er value dite pari 
// variable gula state er maddome handle krbo