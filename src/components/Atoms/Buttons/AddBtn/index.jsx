import "./style.css";
function AddBtn({ cartAddHandler, element }) {
  return (
    <button
    plausible-envent-compra={element}
      onClick={(event) => {
        event.preventDefault();
        cartAddHandler(element);
      }}
      className="btn__add"
    >
      Adicionar
    </button>
  );
}
export default AddBtn;
