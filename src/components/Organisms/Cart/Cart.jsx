import RemoveBtnAll from "../../Atoms/Buttons/RemovBtnAll/BtnRemovAll";
import CartHead from "../../Atoms/Texts/CartHead/CartHead";
import CartItem from "../../Molecules/CartItem/CartItem";
import "./style.css";

function Cart({ cartProducts, cartRemoveHandler, setCartProducts }) {
  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="cart__container--active">
          <CartHead />
          <div className="cart__flow">
            {cartProducts.map((element) => {
              return (
                <CartItem
                  img={element.img}
                  title={element.name}
                  tag={element.category}
                  id={element.id}
                  key={element.id}
                  cartRemoveHandler={cartRemoveHandler}
                />
              );
            })}
          </div>
          <div className="cart__divide">
            <div className="cart__divide--total-container">
              <span className="cart__divide--total-text">Total</span>
              <span className="cart__dive--total-price">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  cartProducts.reduce((acc, ele) => acc + ele.price, 0)
                )}
              </span>
            </div>
            <RemoveBtnAll setCartProducts={setCartProducts} />
          </div>
        </div>
      ) : (
        <div className="cart__container--empty">
          <CartHead />
          <div className="cart__body--empty">
            <h3 className="cart__title--empty">Sua sacola está vazia</h3>
            <p className="cart__text--empty">Adicione itens</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
