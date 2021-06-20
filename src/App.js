import React, {useState, useLayoutEffect, useMemo} from 'react';
import GuestSlot from './components/Guest';
import 'bulma/css/bulma.css';

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
function App() {
  const [guest, setGuest]=useState({});
  const [list, setList] = useState([]);
  useLayoutEffect(()=>{
    setGuest(sample_guest);
    setList(guest.Guests);
  }, []);
  console.log
  return (
    <div className="App">
      {list.map(g => <GuestSlot guest={g}></GuestSlot> )}
    </div>
  );
}

export default App;
