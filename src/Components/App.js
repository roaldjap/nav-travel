import React from 'react';
import Sidebar from './Sidebar';
import TicketWrapper from './TicketWrapper';

function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="row">
        <Sidebar />
        <TicketWrapper />
      </div>
    </div>
    </div>
  );
}

export default App;
