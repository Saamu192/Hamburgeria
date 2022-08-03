import "./style.css";

function PriceItem({ price }) {
  return (
    <small className="item__price">
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price)}
    </small>
  );
}

export default PriceItem;
