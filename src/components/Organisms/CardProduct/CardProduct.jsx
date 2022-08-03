import ImgItem from "../../Atoms/Imgs/ImgItem/ImgItem";
import TagItem from "../../Atoms/Texts/TagItem/TagItem";
import TitleItem from "../../Atoms/Texts/TitleItem/TitleItem";
import PriceItem from "../../Atoms/Texts/PriceItem/PriceItem";
import AddBtn from "../../Atoms/Buttons/AddBtn";
import "./style.css";

function CardProduct({ img, title, tag, price, element, cartAddHandler }) {
  return (
    <section className="card__product">
      <ImgItem src={img} alt={title} />
      <TitleItem title={title} />
      <TagItem tag={tag} />
      <PriceItem price={price} />
      <AddBtn element={element} cartAddHandler={cartAddHandler} />
    </section>
  );
}

export default CardProduct;
