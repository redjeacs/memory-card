function Card({ character, onClick, isClicked }) {
  return (
    <div className={`card ${isClicked ? "clicked" : ""}`} onClick={onClick}>
      <div
        className="character-container"
        style={{ backgroundImage: `url(${character.spriteUrl})` }}
      ></div>
      <div className="character-name">{character.name}</div>
    </div>
  );
}

export default Card;
