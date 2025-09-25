import "./App.css";
import Header from "./components/header";
import Card from "./components/card";

const test = { src: "./assets/pokemon-logo.png", name: "test" };

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="cards">
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
          <Card character={test} />
        </div>
      </main>
    </>
  );
}

export default App;
