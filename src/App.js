import './App.css';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  let [balance, setBalance] = useState(69);

  return (
    <div className="App">
		  <NavBar balance={balance}/>
      <div className='items'>

      </div>
    </div>
  );
}

export default App;
