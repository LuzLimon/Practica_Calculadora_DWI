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
    <h1>Calculator</h1>
    <label for="primerNum">Ingresar primer dígito:
      </label>
      <input
        type="number"
        name="primerNum"
        class="form-control"
        onChange={(event) => {
          setprimerNum(event.target.value);
        }}
      />
      <br/>
      <label for="primerNum">Ingresar segundo dígito:
      </label>
      <input
        type="number"
        name="segundoNum"
        class="form-control"
        onChange={(event) => {
          setsegundoNum(event.target.value);
        }}
      />
         <br/>
      <div class="buttons">
        <button className="btn" type="button" class="btn btn-primary" onClick={sumar}>Sumar</button>
        <button className="btn" type="button" class="btn btn-success" onClick={restar}>Restar</button>
        <button className="btn" type="button" class="btn btn-danger" onClick={dividir}>Dividir</button>
        <button className="btn" type="button" class="btn btn-warning" onClick={multiplicar}>Multiplicar</button>
      </div>
      <label for="primerNum">Resultado de la operacion:
      </label>
      <input
        type="text"
        name="results"
        class="form-control"
        value={resultado}
        disabled
      />
    </div>
  );
}

export default App;
