function GameOverModal({ score, onRestart, result, isVisible }) {
  return (
    <div
      className="modal-overlay"
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <div className="modal-content">
        <h2>{result}</h2>
        <p>Your Score: {score}</p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOverModal;
