function Header() {
  return (
    <header>
      <div className="logo">
        <img
          className="logo-img"
          src="../src/assets/pokemon-logo.png"
          alt="pokemon logo"
        />
        Memory Card
      </div>
      <div className="scores">
        <div className="score">Score: </div>
        <div className="best-score">Best Score: </div>
      </div>
    </header>
  );
}

export default Header;
