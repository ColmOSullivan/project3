import './App.css';
import './Setup.css';
import Header from './components/Header';
import GenreForm from './components/GenreForm';
import Footer from './components/Footer'




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
