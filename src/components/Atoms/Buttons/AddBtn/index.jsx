import "./style.css";
function AddBtn({ cartAddHandler, element }) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        cartAddHandler(element);
        plausible('Compra', {props: {product: element}})
      }}
      className="btn__add"
    >
      Adicionar
    </button>
  );
}
export default AddBtn;
