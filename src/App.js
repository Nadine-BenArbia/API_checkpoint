import './App.css';
import Home from './pages/home/Home';
import Coktail_List from './pages/Cocktail List/CocktailList ';
import Detail_Page from './pages/CocktailDetail page/Coktail Detail';
import about from './pages/About/about';
import Error from './pages/Error page/Error';
import { Navbar } from 'react-bootstrap';
import {Switch,Route} from  'react-router-dom';
import NavBar from './componenets/Navbar/Navbar';


function App() {
  return (
    
    <div className="App">
      <NavBar/> 
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={about} />
        <Route  path="/coktail_list" component={Coktail_List} />
        <Route  path="/CoktailDtail" component={Detail_Page} />
        <Route exact path="/*" component={Error} />
      </Switch>
  
    </div>
  );
}

export default App;
