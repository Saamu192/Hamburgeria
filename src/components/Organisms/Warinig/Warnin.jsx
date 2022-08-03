import "./style.css";
function WarningModal({ setWarning }) {
  return (
    <div className="warning">
      <div className="warning__status">
        <span className="warning__title">Status</span>
        <button
          onClick={(event) => {
            event.preventDefault();
            setWarning(false);
          }}
          className="warning__close"
        >
          X
        </button>
      </div>
      <div className="warning__message">Você já tem este item no carrinho!</div>
      <div className="warning__bar"></div>
    </div>
  );
}

export default WarningModal;
