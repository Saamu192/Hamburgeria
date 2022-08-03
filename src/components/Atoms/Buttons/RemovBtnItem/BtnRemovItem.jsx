import "./style.css";

function BtnRemoveItem({ cartRemoveHandler, id }) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        cartRemoveHandler(id);
      }}
      className="btn__remove"
    >
      Remover
    </button>
  );
}
export default BtnRemoveItem;
