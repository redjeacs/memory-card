import "./App.css";
import Header from "./components/header";
import Card from "./components/card";
import getRandomPokemons from "./pokemon";
import { useEffect, useState } from "react";
import GameOverModal from "./game-over";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [result, setResult] = useState("You Lose!");

  useEffect(() => {
    getRandomPokemons(15).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  function shuffleCards() {
    const array = pokemons;
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setPokemons(array);
  }

  function updateBestScore(newScore) {
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  function restartGame() {
    setScore(0);
    setClickedIds([]);
  }

  function checkWin(currentScore) {
    if (currentScore === pokemons.length) {
      setResult("You Win!");
      updateBestScore(currentScore);
      setModalVisibility(true);
    } else {
      setResult("You Lose!");
    }
  }

  function handleClick(character) {
    if (!clickedIds.includes(character.id)) {
      const newScore = score + 1;
      setClickedIds([...clickedIds, character.id]);
      setScore(newScore);
      checkWin(newScore);
      shuffleCards();
    } else {
      updateBestScore(score);
      setModalVisibility(true);
    }
  }

  function handleRestart() {
    restartGame();
    setModalVisibility(false);
  }

  return (
    <>
      <GameOverModal
        score={score}
        onRestart={handleRestart}
        result={result}
        isVisible={modalVisibility}
      />
      <Header score={score} bestScore={bestScore} />
      <main>
        <div className="cards">
          {pokemons.map((character) => (
            <Card
              key={character.id}
              character={character}
              onClick={() => handleClick(character)}
              isClicked={clickedIds.includes(character.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
