import './App.css';
import Home from "../src/components/Home/Home";
import NavBar from "../src/components/NavBar/NavBar";
import Favorites from "../src/components/Favorites/Favorites";
import BreedDetail from "../src/components/BreedDetail/BreedDetail";
import CreateBreed from "../src/components/CreateBreed/CreateBreed";
import LandingPage from './components/LandingPage/LandingPage';
import BreedFinder from './components/BreedFinder/BreedFinder';
import { Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={LandingPage} />
      <Route path='/home' component={NavBar} />
      <Route path='/home' component={BreedFinder} />
      <Route path='/home' exact component={Home} />
      <Route path='/home' component={Footer} />
      <Route path='/favoritos' component={NavBar} />
      <Route path='/favoritos' component={Favorites} />
      <Route path='/favoritos' component={Footer} />
      <Route path='/dogs/:id' component={NavBar} />
      <Route path='/dogs/:id' component={BreedDetail} />
      <Route path='/dogs/:id' component={Footer} />
      <Route path='/create/breed' component={NavBar} />
      <Route path='/create/breed' component={CreateBreed} />
    </div>
  );
}

export default App;
