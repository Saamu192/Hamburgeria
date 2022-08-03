import "./style.css";

function ResultSearch({ text }) {
  return (
    <h1 className="srch__result">
      Resultados para: <strong className="srch__result--text">{text}</strong>
    </h1>
  );
}

export default ResultSearch;
