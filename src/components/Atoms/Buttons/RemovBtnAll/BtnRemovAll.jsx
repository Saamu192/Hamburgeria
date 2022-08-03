import "./style.css";
function RemoveBtnAll({ setCartProducts }) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        setCartProducts([]);
      }}
      className="btn__remove--all"
    >
      Remover Todos
    </button>
  );
}
export default RemoveBtnAll;
