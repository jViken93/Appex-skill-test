import React from 'react'; 
import GlobalStyles from './components/GlobalStyles';
//Pages
import BedriftSøk from './pages/BedriftSøk'; 
import HomePage from './pages/HomePage'; 
import RegisterList from './pages/RegisterList';
//Router 
import {Switch, Route} from 'react-router-dom'; 
//Components
import Nav from './components/Nav';

function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <BedriftSøk />
        </Route>
        <Route path="/hjem">
         <HomePage/>
        </Route>
          <Route path="/register"> 
        <RegisterList/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
