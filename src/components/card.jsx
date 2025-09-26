function Card({ character }) {
  return (
    <div className="card">
      <div
        className="character-container"
        style={{ backgroundImage: `url(${character.spriteUrl})` }}
      ></div>
      <div className="character-name">{character.name}</div>
    </div>
  );
}

export default Card;
