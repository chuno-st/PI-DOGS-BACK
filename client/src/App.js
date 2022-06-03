import './App.css';
import Home from "../src/components/Home/Home";
import NavBar from "../src/components/NavBar/NavBar";
import Favorites from "../src/components/Favorites/Favorites";
import BreedDetail from "../src/components/BreedDetail/BreedDetail";
import CreateBreed from "../src/components/CreateBreed/CreateBreed";
import LandingPage from './components/LandingPage/LandingPage';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={LandingPage} />
      <Route path='/home' component={NavBar} />
      <Route path='/home' exact component={Home} />
      <Route path='/favorites' component={Favorites} />
      <Route path='/dogs/:id' component={BreedDetail} />
      <Route path='/create/breed' component={CreateBreed} />
    </div>
  );
}

export default App;
