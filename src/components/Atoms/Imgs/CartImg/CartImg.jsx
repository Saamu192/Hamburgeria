import "./style.css";
function ImgCartItem({ src, alt }) {
  return (
    <div className="img__item--cart">
      <img className="img__item--content-cart" src={src} alt={alt} />
    </div>
  );
}
export default ImgCartItem;
