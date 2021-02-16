import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar';
import Game from './Game';
import UserInfo from './UserInfo';
import Login from './Login';
import SignUp from './SignUp';
import About from './About';

function App() {
  const [character, setCharacter] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3000/characters/10")
    .then(response => response.json())
    .then(data => setCharacter(data))
  }, []);

  function handleRestart(){
    window.location.reload()
    
        fetch("http://localhost:3000/characters/10",{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "hp": 100
            })
        })
        .then(response => response.json())
        .then(data => {setCharacter(data)})

      };


  return (
    <div className="root">
        <Route>
            <Header />
            <NavBar/>
        </Route>
        <Switch>
          <Route exact path="/">
            <Game character={character} setCharacter={setCharacter} handleRestart={handleRestart}/>
            <UserInfo />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
