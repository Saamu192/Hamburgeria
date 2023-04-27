import "./style.css";
function AddBtn({ cartAddHandler, element }) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        cartAddHandler(element);
        /*global function, plausible*/
        /*eslint no-undef: "error"*/
        plausible("compra", {
          props: { produto: element.name, preco: element.price },
        });
      }}
      className="btn__add"
    >
      Adicionar
    </button>
  );
}
export default AddBtn;
