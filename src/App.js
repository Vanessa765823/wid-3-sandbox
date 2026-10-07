
import {useState} from "react";
// wir importieren use State "Hook" / "Function"

export default function App() {
  const [counter,setCounter] =useState(0); //Hook, immer Default Wert definieren

  
  

  function handleClick (){
    // man könnte noch weitere Nebenfunktionen etc. aufrufen, Nebeneffekte etc.
    console.log("Ich wurde geklickt");
  }


  return (
    <div className="App">
      {/*<button id= "meinButton" 
      onClick={handleClick}
      >
        Klick mich
        </button> 

      <button 
      id= "meinButton2" 
      onClick={() => {
        console.log("Ich wurde gecklickt");

        }}
        >
          Klick mich auch
          </button> */}

      {/*<input onChange={(e)=> {
        console.log(e.target.value);
      }}
      type = "text"

      ></input>*/}  

        <button
        onClick={() => {
          setCounter(counter +1);
            
            console.log(counter);
          }}>
          Like
        </button>

    </div>
  );
}

