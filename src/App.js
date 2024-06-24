import {NavBar} from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Contact } from './Components/Contact';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Contact/>
      
    </div>
  );
}

export default App;
