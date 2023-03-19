import './App.css';
import {NavBar} from './components/NavBar';
import {Service} from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Introduction } from './components/Introduction';
import {Info} from './components/Info'
import {Team} from './components/Team'
import {Subscribe} from './components/Subscribe'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">  
      <body>
        <NavBar />
        <Introduction/>
        <Service/>
        <Info/>
        <Team/>
        <Subscribe/>
        <Footer/>
      </body>
    </div>
  );
}

export default App;


