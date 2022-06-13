import React, { useState } from "react";
import './App.css';

function App() {

  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [primerNum, setprimerNum] = useState("");
  const [segundoNum, setsegundoNum] = useState("");
  const [resultado, setresultado] = useState("");

  const sumar = function (e) {
    setResult(Number(primerNum) + Number(segundoNum));
  };
  const restar = function (e) {
    setResult(Number(primerNum) - Number(segundoNum));
  };
  const dividir = function (e) {
    setResult(Number(primerNum) / Number(segundoNum));
  };
  const multiplicar = function (e) {
    setResult(Number(primerNum) * Number(segundoNum));
  };

return (
  <div className="App" class="container">
    <h1>User List</h1>
    <input
      type="text"
      name="name"
      class="form-control"
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
    <input
      type="text"
      name="lastName"
      class="form-control"
      onChange={(event) => {
        setLastname(event.target.value);
      }}
    />
    <button
      class="btn btn-primary"
      onClick={() => {
        setPeople((current) => [{ name, lastName }, ...current]);
      }}
    >
      Add user
    </button>
    <ul>
      {people.map((person, idx) => (
        <li id={idx}>{`${person.name} ${person.lastName}`}</li>
      ))}
    </ul>
   
    </div>
  );
}

export default App;
