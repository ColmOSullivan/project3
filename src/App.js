import './App.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import Header from './Header';
import GenreForm from './GenreForm';



function App() {


  

// useEffect( () => {
//   const options = {
//     method: 'GET',
//     url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
//     params: {
//             category: "shooter"
//             },
//     headers: {
//       'X-RapidAPI-Key': '038c7bb3bamshd5a55fd28d83252p1a3bfdjsncb0a0c2ef1d6',
//       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options)
//   .then( (res) => {
//     const gameArray = res.data;
//     setAllGames(gameArray);
//   })
// },[]);
  /**useEffect code ends here. We're currently generating a ONE completely random game, no scope for genre/category yet.**/ 

  return (
    <div className="App">
      <Header />
      
      <GenreForm />

    
    </div>
  );
}

export default App;

/*const oneGame = Math.floor(Math.random() * gameArray.length)
      setAllGames(gameArray[oneGame])*/ 
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