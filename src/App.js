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
    setresultado(Number(primerNum) + Number(segundoNum));
  };
  const restar = function (e) {
    setresultado(Number(primerNum) - Number(segundoNum));
  };
  const dividir = function (e) {
    setresultado(Number(primerNum) / Number(segundoNum));
  };
  const multiplicar = function (e) {
    setresultado(Number(primerNum) * Number(segundoNum));
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
    <label for="primerNum">Ingresar primer dígito:
      </label>
      <input
        type="number"
        name="primerNum"
        onChange={(event) => {
          setprimerNum(event.target.value);
        }}
      />
      <br/>
      <br/>
      <label for="primerNum">Ingresar Segundo dígito:
      </label>
      <input
        type="number"
        name="segundoNum"
        onChange={(event) => {
          setsegundoNum(event.target.value);
        }}
      />
      <br/>
      <br/>
      <div class="buttons">
        <button className="btn" type="button" class="btn btn-primary" onClick={sumar}>Sumar</button>
        <button className="btn" type="button" class="btn btn-warning" onClick={restar}>Restar</button>
        <button className="btn" type="button" class="btn btn-primary" onClick={dividir}>Dividir</button>
        <button className="btn" type="button" class="btn btn-primary" onClick={multiplicar}>Multiplicar</button>
      </div>
      <br/>
      <br/>
      <label for="primerNum">Resultado:
      </label>
      <input
        type="text"
        name="results"
        value={resultado}
        disabled
      />
    </div>
  );
}

export default App;
