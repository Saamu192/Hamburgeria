import BtnRemoveItem from "../../Atoms/Buttons/RemovBtnItem/BtnRemovItem";
import ImgCartItem from "../../Atoms/Imgs/CartImg/CartImg";
import TagItem from "../../Atoms/Texts/TagItem/TagItem";
import TitleItem from "../../Atoms/Texts/TitleItem/TitleItem";
import "./style.css";

function CartItem({ img, title, tag, cartRemoveHandler, id }) {
  return (
    <div key={id} className="item__cart--container">
      <ImgCartItem src={img} alt={title} />
      <div className="item__cart--content-text">
        <TitleItem title={title} />
        <TagItem tag={tag} />
        <BtnRemoveItem cartRemoveHandler={cartRemoveHandler} id={id} />
      </div>
    </div>
  );
}

export default CartItem;
