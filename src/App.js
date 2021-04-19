import './App.scss';
import Header from './components/Header/Header';
import { Route } from 'react-router';
import Pizza from './components/Pizza/Pizza'
import Navigation from './components/Header/Navigation/Navigation';
import Basket from './components/Basket/Basket';


function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header />
            <Route path="/(|Pizza|Sushi|Wok)/" render={()=><Navigation />} exact/>
            <Route path='/basket' render={()=><Basket />} exact/>
            
            <div>
              <Route path='/pizza' render={()=><Pizza/>} exact/>
            </div>
            

        </div>
    </div>
  );
}

export default App;
