import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {Service} from './components/Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Introduction } from './components/Introduction/Introduction';
import {Info} from './components/Info/Info'
import {Team} from './components/Team/Team'
import {Subscribe} from './components/Subscribe/Subscribe'
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <div className="App">  
        <NavBar />
        <Introduction/>
        <Service/>
        <Info/>
        <Team/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}

export default App;


