import './App.css';
import {NavBar} from './components/NavBar';
import {Offers} from './components/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Introduction } from './components/Introduction';

function App() {
  return (
    <div className="App">  
      <body>
        <NavBar />
        <Introduction/>
        <Offers/>
      </body>
    </div>
  );
}

export default App;


