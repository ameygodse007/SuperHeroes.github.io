import React,{useState} from 'react';
import SearchBar from "./Components/SearchBar";
import "./App.css";
import CharacterCard from "./Components/CharacterCard";
import SelectionModal from "./Components/SelectionModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row} from 'react-bootstrap';




function App() {

  const[characterInfo,setcharacterInfo]=useState();
  const [error,seterror]= useState(null);
  const [isloading,setloading] = useState(false);
  const [show,setshow]= useState(false);
  const [characterList,setcharacterList]=useState(null);
  
  
  const getcharacter=async (superHeroname)=>{
    setloading(true);
    try {
      const response=await fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1560787344116671/search/${superHeroname}`);
      const data = await response.json();
      if(!response.ok || data.response==='error'){
        throw Error(`"${superHeroname}" not found`);
      }
      const fildata = data.results.filter((item)=>superHeroname.toLowerCase() === item.name.toLowerCase());
      setcharacterList(fildata);
      if(fildata.length ===1){
        setcharacterInfo(fildata[0]);
      }
      else{
        setshow(true);
      }
    } catch (err) {
      seterror(err.message);
      setcharacterInfo(null);
    }
    setloading(false);
  };
  
  
  return (
    <Container  >
      
      <Row  className="justify-content-md-center">
      <h1>SuperHeros VS Villians</h1>
      </Row>
      <SearchBar  isloading={isloading} error={error} seterror={seterror} getcharacter={getcharacter}/>
      <SelectionModal show={show} setshow={setshow} characterList={characterList} setcharacterInfo={setcharacterInfo} />
      {characterInfo && !error ?<CharacterCard characterInfo={characterInfo} /> : null }
    </Container>
  );


}

export default App;
