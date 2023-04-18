import "./style.css";
function AddBtn({ cartAddHandler, element }) {
  return (
    <button
    plausible-event-compra={element.name}
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
