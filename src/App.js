
import './App.css';
import Row from './Row'
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <br /><br />
      <Row title=' Top Trending' fetchURL={requests.fetchTrending} islargerow={true}/>
      <Row title=' Netflix Originals' fetchURL={requests.fetchNetflixOriginals}/>
      <Row title=' Top Rated' fetchURL={requests.fetchTopRated}/>
      <Row title=' Action ' fetchURL={requests.fetchActionMovies}/>
      <Row title=' Comedy ' fetchURL={requests.fetchComedyMovies}/>
      <Row title=' Horror ' fetchURL={requests.fetchHorrorMovies}/>
      <Row title=' Fantasies' fetchURL={requests.fetchRomanceMovies}/>
      <Row title=' Documentaries' fetchURL={requests.fetchDocumentaries}/>

      <Footer/>
    </div>
  );
}

export default App;
