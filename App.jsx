// import logo from './logo.svg';
// import './App.css';
// import { Button, Input, } from './components/Input';
// import { } from './components/Input';
// import { useState } from 'react';

// function App() {

//   const [text, setText] = useState("");
//   const [list, setlist] = useState([]);


//   let add = () => {
//     setlist([...list, text])
//     setText("")

//   }
//   let del = (i) => {
//     list.splice(i, 1);
//     setlist([...list])
//   };

//   let edit = (i) => {
//     let a = prompt("enter text", list[i]);
//     list[i] = a
//     setlist([...list])
//   };


//   return (
//     <div className="App">

//       <h1 className='header'>Todo</h1>



//       <div>

//         <div>
//           <Input onChange={(e) => setText(e.target.value)} label="enter text" />
//           <Button OnClick={add} label="add" />
//         </div>
//         <p>{text}</p>

//       </div>
//       <ul>
//         {list.map((e, i) => {
//           <li key={i}>{e}
//             <Button OnClick={del} label="add" />
//             <Button OnClick={edit} label="add" />

//           </li>
//         })}
//       </ul>
//     </div>
//   );
// }

import './App.css';
// import { Button, Input } from './components/Input';
// import { } from './components/Input';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';



function App() {

  const [text, setText] = useState("");
  const [list, setlist] = useState([]);

  let add = () => {
    setlist([...list, text]);
    // console.log(setlist)
    setText("")
  }

  let del=(i)=>{

    list.splice(i,1);
    setlist([...list]);
  }

let edit = (i)=>{
let a = prompt("enter text ",list[i]);
list [i]=a
setlist([...list])
}

  return (



    <>
{/* 
      <Input onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
      <Button onClick={add} label="Add" />






    



      <ul>

        {list.map((e, i) => {
          return <li key={i}>{e} 
                <Button onClick={()=>edit(i)} label="Edit" />
                <Button onClick={()=>del(i)} label="delete" />


          </li>
        })}
      </ul>


      <TextField label="email"/> */}




<TextField onChange={(e) => setText(e.target.value)} label="Enter Text"/>
<Button onClick={add} variant="contained">Add</Button>

<ul>

        {list.map((e, i) => {
          return <li key={i}>{e} 
          <Button onClick={()=>edit(i)} variant="contained">Edit</Button>
          <Button onClick={()=>del(i)} variant="contained">Edit</Button>

                

          </li>
        })}
      </ul>
    </>


  )



}

export default App;








