import "./style.css";
function ImgItem({ src, alt }) {
  return (
    <div className="img__item">
      <img className="img__item--content" src={src} alt={alt} />
    </div>
  );
}
export default ImgItem;
