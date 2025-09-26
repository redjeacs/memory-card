import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import getRandomPokemons from "./pokemon";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getRandomPokemons(18).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="cards">
          {pokemons.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
