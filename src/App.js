import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

function App() {
  return (
    <div>
    <div className="App-title">Music Master </div>
    <div>
 

      <input placeholder='search artist'/>
      <button>Button</button>
     
    </div>
    <div className='profile'>
      <div>Artist Picture</div>
      <div>Artist Name</div>
    </div>
    <div className='Gallery'>
      Gallery
    </div>
    </div>
    
  );
}

export default App;
