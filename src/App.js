import React ,{ useState, useEffect }from 'react';
import { BsPlusCircle } from "react-icons/bs";
import logo from './logo.svg';
import './App.css';


import styles ,{Liststyle ,ThemeButton ,Movie, Title ,ThemeButton2 , SearchBarStyled} from "./styles";

import { v4 as uuidv4 } from 'uuid';




function App() {
  

 const [List, setList] = React.useState([]);
 const [lengthlist, setLengthlist] = useState(List.length);
 const [Listtwo, setListtwo] = React.useState([]);
 const [lengthlisttwo, setLengthlisttwo] = useState(Listtwo.length);

 const [name, setName] = React.useState('');
 
 const [query, setQuery] = useState(""); //1

 const [queryy, setQueryy] = useState(""); 
 
 const filteredMovie = List.filter((item) => item.name.toLowerCase().includes(query)).map((item) => 
   <Liststyle><ul>
 
   <li key={item.id}>{item.name} <ThemeButton2 onClick={() => handlewatched(item.id,item.name)}>watched</ThemeButton2> <ThemeButton onClick={() => handleDelete(item.id)}>Delete</ThemeButton></li>
 
</ul></Liststyle>);


const filteredMoviewatched = Listtwo.filter((item) => item.name.toLowerCase().includes(queryy)).map((item) => 
   <Liststyle><ul>
 
 <li key={item.id}>{item.name} <ThemeButton2 onClick={() => handleunwatched(item.id,item.name)}>unwatched</ThemeButton2> <ThemeButton onClick={() => handleDeletetwo(item.id)}>Delete</ThemeButton></li> 
</ul></Liststyle>);

 
 function handleChange(event) {
  setName(event.target.value);
}


function handleAdd() {
  // add item
  const newList = List.concat({ name, id: uuidv4() });
 
    setList(newList);
 
    setName('');
    setLengthlist(lengthlist+1);
}

const handleDelete = (id) => {

  const newList = List.filter((item) => item.id !== id);
 
    setList(newList);
    setLengthlist(lengthlist-1);
  
};


const handleDeletetwo = (id) => {

  const newList = Listtwo.filter((item) => item.id !== id);
 
    setListtwo(newList);
    setLengthlisttwo(lengthlisttwo-1);
  
};


  const handlewatched = (id, name) => {

    const newList = List.filter((item) => item.id !== id);
   
      setList(newList);
  
   setLengthlist(lengthlist-1);

    const secondList = Listtwo.concat({ name , id });
 
    setListtwo(secondList);
    setLengthlisttwo(lengthlisttwo+1);

 
    setName('');
    
  };

  const handleunwatched = (id, name) => {

    const newList = Listtwo.filter((item) => item.id !== id);
   
    setListtwo(newList);
   
   setLengthlisttwo(lengthlisttwo-1);


    const secondList = List.concat({ name , id });
 
    setList(secondList);
 
    setName('');
    setLengthlist(lengthlist+1);
   
  };
 
  
 
  return (


    <Movie>
      <list>
      <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button></list>
<div >
   
<div> 
    </div>
        <Title>
      
        <input type="text"   onChange={(event) => setQuery(event.target.value)} />
    <button type="button" >
          search
        </button> <h5>WatchList</h5><p>LENGTH OF LIST : {lengthlist}</p></Title>
     
     
      <Liststyle>{filteredMovie}</Liststyle>
     <Title>
     <input type="text"  onChange={(event) => setQueryy(event.target.value)} />
    <button type="button" >
          search
        </button> 
      <h5>Watched </h5> <p>LENGTH OF LIST :{lengthlisttwo}</p></Title>


<Liststyle>{filteredMoviewatched}</Liststyle>
       
    
  </div>
  </Movie>
  );
  
}

export default App;
