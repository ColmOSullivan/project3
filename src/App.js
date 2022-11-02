import './App.css';
import './Setup.css';
import Header from './Header';
import GenreForm from './GenreForm';
import Footer from './Footer'




function App() {
  return (
    <div className="App wrapper flexContainer">
      <>
      <Header />
      </>
      <main>
      <GenreForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
