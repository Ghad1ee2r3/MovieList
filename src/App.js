import React ,{ useState, useEffect }from 'react';
import { BsPlusCircle } from "react-icons/bs";
import logo from './logo.svg';
import './App.css';
import styled ,{ ThemeProvider } from "styled-components";
// Data
//import List from "./watchlist";
//import MovieList from "./MovieList";
//import { SearchBarStyled } from "./styles";
import styles ,{Liststyle ,ThemeButton ,Movie, Title ,ThemeButton2 , SearchBarStyled} from "./styles";
import list from './watchlist';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from "./searchbar";

//const theme = {
  
 //   mainColor: "#242424", // main font color
 //   backgroundColor: "blue", // main background color
 //   pink: "#ff85a2",
  
//};


function App() {
  

 const [List, setList] = React.useState(list);
 const [lengthlist, setLengthlist] = useState(List.length);
 const [Listtwo, setListtwo] = React.useState([]);
 const [lengthlisttwo, setLengthlisttwo] = useState(Listtwo.length);

 const [name, setName] = React.useState('');
 
 const [query, setQuery] = useState("");
 //const movieList = _list
 // .filter((item) => item.name.includes(query))
 // .map((item) => );
 //const filtermovies = query => setQuery(query);

 //const filteredMovie =()=> List.filter(item =>
 // item.name.toLowerCase().includes(query.toLowerCase()));
 function handleChange(event) {
  setName(event.target.value);
}

function handleChangeSearch(event){
 // setList(filteredMovie(event.target.value))

 //useEffect(() => {
 // let movies = List.filter(movie =>
 //   movie.toLowerCase().includes(query.toLowerCase())
  //);
  //setList(movies);
//}, [query, list]);

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
  //alert(`Delete cookie #${id}`);
};


const handleDeletetwo = (id) => {

  const newList = Listtwo.filter((item) => item.id !== id);
 
    setListtwo(newList);
    setLengthlisttwo(lengthlisttwo-1);
  //alert(`Delete cookie #${id}`);
};


  const handlewatched = (id, name) => {

    const newList = List.filter((item) => item.id !== id);
   
      setList(newList);
   //   getname(newList);
   setLengthlist(lengthlist-1);

    const secondList = Listtwo.concat({ name , id });
 
    setListtwo(secondList);
    setLengthlisttwo(lengthlisttwo+1);

 
    setName('');
    //alert(`Delete cookie #${id}`);
  };

  const handleunwatched = (id, name) => {

    const newList = Listtwo.filter((item) => item.id !== id);
   
    setListtwo(newList);
   //   getname(newList);
   setLengthlisttwo(lengthlisttwo-1);


    const secondList = List.concat({ name , id });
 
    setList(secondList);
 
    setName('');
    setLengthlist(lengthlist+1);
    //alert(`Delete cookie #${id}`);
  };
 
  

 
  return (


    <Movie>
      <list>
      <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button></list>

    <div >
    <SearchBar setQuery={setQuery} />
<div> 
    <input type="text" value={name} onChange={handleChangeSearch} />
    <button type="button" >
          search
        </button></div>
        <Title> <h5>WatchList</h5><p>LENGTH OF LIST : {lengthlist}</p></Title>
     
     
      <Liststyle><ul>
        {List.map((item) => (
          <li key={item.id}>{item.name} <ThemeButton2 onClick={() => handlewatched(item.id,item.name)}>watched</ThemeButton2> <ThemeButton onClick={() => handleDelete(item.id)}>Delete</ThemeButton></li>
        ))}
      </ul></Liststyle>
     <Title>
      <h5>Watched </h5> <p>LENGTH OF LIST :{lengthlisttwo}</p></Title>


<Liststyle><ul>
        {Listtwo.map((item) => (
          <li key={item.id}>{item.name} <ThemeButton2 onClick={() => handleunwatched(item.id,item.name)}>unwatched</ThemeButton2> <ThemeButton onClick={() => handleDeletetwo(item.id)}>Delete</ThemeButton></li>
        ))}
      </ul></Liststyle>
       
    
  </div>
  </Movie>
  );
  
}

export default App;
