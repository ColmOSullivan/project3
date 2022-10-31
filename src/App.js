import './App.css';
import Header from './Header';
import GenreForm from './GenreForm';



function App() {


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