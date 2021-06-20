import React, {useState, useEffect, useMemo} from 'react';
import ShowGuest from './components/Guest'
import 'bulma/css/bulma.css';

function App() {
  const sample_guest = {
    "_id": "1234",
    "AddressedTo": {
        "Name": "Hannah Clack",
        "Street1": "1234 SnowCone Dr",
        "Street2": null,
        "City": "San Diego",
        "State": "California"
    },
    "Guests": [{
        "_name": "Hannah Clack",
        "_status": -1,
        "_menuop": -1
      },{
        "_name": "Harper Draxler",
        "_status": -1,
        "_menuop": -1 
      }],
  
  };
  return (
    <div className="App">
      <ShowGuest list={sample_guest}></ShowGuest>
    </div>
  );
}

export default App;
