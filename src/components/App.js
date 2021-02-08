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
  const [ammos, setAmmos] = useState([])
  const [map, setMap] = useState("")
  const [lifePoints, setLifePoints] = useState([])
    
  useEffect(() => {
    fetch("http://localhost:3000/ammos")
    .then(response => response.json())
    .then(data => setAmmos(data.map(ammo => <img key={ammo.id} className="ammo" src={ammo.image} alt="ammo" style={{
      bottom: Math.floor(Math.random() * 2650),
      right: Math.floor(Math.random() * 2600)
  }}/>)))
}, []);

useEffect(() => {
  fetch("http://localhost:3000/life_points")
  .then(response => response.json())
  .then(data => setLifePoints(data.map(lifePoint => <div key={lifePoint.id} className="life-point" style={{
    display: "inline-block",
    position: "absolute",
    height: 16,
    width: 16,
    backgroundImage: `url(${lifePoint.image})`,
    backgroundPosition: '-16px -1px',
    bottom: Math.floor(Math.random() * 2650),
    right: Math.floor(Math.random() * 2600)
    }}></div>
  )))
}, []);

  useEffect(() => {
    fetch("http://localhost:3000/maps/9")
    .then(response => response.json())
    .then(data => setMap(data.map_image))
  }, []);

  return (
    <div className="root">
        <Route>
            <Header />
            <NavBar/>
        </Route>
        <Switch>
          <Route exact path="/">
            <Game ammos={ammos} map={map} lifePoints={lifePoints}/>
            <UserInfo />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
