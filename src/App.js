import './App.css';
import {NavBar} from './components/NavBar';
import {Service} from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Introduction } from './components/Introduction';
import {Info} from './components/Info'

function App() {
  return (
    <div className="App">  
      <body>
        <NavBar />
        <Introduction/>
        <Service/>
        <Info/>
      </body>
    </div>
  );
}

export default App;


