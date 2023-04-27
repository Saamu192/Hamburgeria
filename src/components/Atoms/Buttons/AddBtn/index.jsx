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
          props: {
            products: [
              {
                brand: "Carmensitas",
                category: "Roupas/Calças",
                id: element.id,
                name: element.name,
                price: element.price,
                quantity: 1,
                variant: "CALÇA FLARE CANELADA ISA - P",
              },
            ],
            preco: element.price,
          },
        });
      }}
      className="btn__add"
    >
      Adicionar
    </button>
  );
}
export default AddBtn;

// products: [
//   {
//     brand: "Carmensitas",
//     category: "Roupas/Calças",
//     id: "2262",
//     name: "CALÇA FLARE CANELADA ISA - P",
//     price: 299,
//     quantity: 1,
//     variant: "CALÇA FLARE CANELADA ISA - P"
//   }
// ]
