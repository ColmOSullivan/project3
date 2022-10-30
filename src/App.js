import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Header from './Header';
import GenreForm from './GenreForm';
import DisplayGame from './DisplayGame';


function App() {

  /**This line belongs in form, only here for early tests ---- const [userChoice, setUserChoice] = useState([])  **/
  
const [allGames, setAllGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([])


const getGame = (e, userSelection) =>{
  e.preventDefault();
  const copyOfAllGames = [...allGames];
  const randomGame = Math.floor(Math.random() * copyOfAllGames.length)
  const newFilteredGames = copyOfAllGames[randomGame]
  setFilteredGames(newFilteredGames)
}
/* getGame hook is making a copy of allGames, generating one random number and giving that as an index for filtered games to get one random game.*/ 


useEffect( () => {
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
            'sort-by': 'alphabetical',
            },
    headers: {
      'X-RapidAPI-Key': '038c7bb3bamshd5a55fd28d83252p1a3bfdjsncb0a0c2ef1d6',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options)
  .then( (res) => {
    const gameArray = res.data;
    /*const oneGame = Math.floor(Math.random() * gameArray.length)
      setAllGames(gameArray[oneGame])*/ 
    setAllGames(gameArray);
  })
},[]);
  /**useEffect code ends here. We're currently generating a ONE completely random game, no scope for genre/category yet.**/ 

  return (
    <div className="App">
      <Header />
      
      <GenreForm getGame={getGame}/>

    {/* <DisplayGame game = {allGames}/> */}
    </div>
  );
}

export default App;


// Happy Path:
// User makes a selection of ONE genre from radio list.
// user submits selection 
  // save submission in state variable example: const [userChoice, setUserChoice] = useState('shooter')
  //Call the API with the saved selection
// with returned data select one random choice (useGetgameArray)-this hook consumes useGetGameData.
// displays a card with selected game data.
  // displays:  
    // Thumbnail, 
    // title, 
    // short description 
    // a link to take them to free-to-play game profile
    // a link developer URL
    
// secondary stretch goals:
// consider if data has errors and what we want to show
// consider when data is loading.