import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios.get("https://api.gyanibooks.com/library/get_dummy_notes/?format=json")
      .then((res) => setMyData(res.data))
      .catch((error) => setIsError(error.message));
  }, []);
  return (
    <>
    
      <h1 id = "check1">Dummy Notes</h1>
      {isError != "" && <h2>{isError}</h2>}
      <div className='grid'>
        {myData.map((post) => {
            const { id, user, title, category, notes } = post;
            // if(notes == "")notes = "There are no notes.";
            return <div className="card card-container" key={id}>
              <h2>{title}</h2>
              <h4>Category : {category}</h4>
              {(notes == "" && <h1>{"There are no notes."}</h1>) || (notes != ""  && <p>{notes}</p>)}
              {/* <p>{notes}</p> */}

            </div>
          })

        }
      </div>
      
    </>
  )
}

export default App
