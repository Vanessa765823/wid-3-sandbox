export default function App() {

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

      <input onChange={(e)=> {
        console.log(e.target.value);
      }}
      type = "text"

      ></input>

    </div>
  );
}

