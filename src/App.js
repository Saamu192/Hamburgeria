import { useEffect, useState } from "react";
import "./App.css";
import ResultSearch from "./components/Atoms/Texts/ResultSearch/ResultSearch";
import CardProduct from "./components/Organisms/CardProduct/CardProduct";
import Cart from "./components/Organisms/Cart/Cart";
import Header from "./components/Organisms/Header/Header";
import WarningModal from "./components/Organisms/Warinig/Warnin";
import Warning from "./components/Organisms/Warinig/Warnin";
import { api } from "./data/Api";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [serchOn, setSearchOn] = useState(false);
  const [warning, setWarning] = useState(false);

  function searchHandler(value) {
    const searchProducts = products.filter((element) => {
      if (element.name.toLowerCase().includes(value.toLowerCase())) {
        return element;
      } else if (element.category.toLowerCase().includes(value.toLowerCase())) {
        return element;
      }
    });
    setSearchInput(value);
    if (value === "") {
      setSearchOn(false);
    } else {
      setSearchOn(true);
    }
    return setSearch(searchProducts);
  }

  function cartAddHandler(element) {
    if (!cartProducts.includes(element)) {
      return setCartProducts([...cartProducts, element]);
    } else {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 5000);
    }
  }

  function cartRemoveHandler(key) {
    const find = cartProducts.findIndex((item) => {
      if (item.id === key) {
        return item;
      } else {
        return null;
      }
    });
    const newCartProducts = [...cartProducts];
    newCartProducts.splice(find, 1);
    return setCartProducts(newCartProducts);
  }

  useEffect(() => {
    setLoading(true);
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <Header
        setSearchOn={setSearchOn}
        setSearchInput={setSearchInput}
        searchHandler={searchHandler}
      />
      <section className="container__search">
        {serchOn && <ResultSearch text={searchInput} />}
      </section>
      <div className="container__full">
        <main>
          {warning && <WarningModal setWarning={setWarning} />}
          {loading ? (
            <div className="loading"></div>
          ) : search.length > 0 ? (
            search.map((element) => {
              return (
                <CardProduct
                  cartAddHandler={cartAddHandler}
                  element={element}
                  img={element.img}
                  title={element.name}
                  tag={element.category}
                  price={element.price}
                  key={element.id}
                />
              );
            })
          ) : (
            products.map((element) => {
              return (
                <CardProduct
                  cartAddHandler={cartAddHandler}
                  element={element}
                  img={element.img}
                  title={element.name}
                  tag={element.category}
                  price={element.price}
                  key={element.id}
                />
              );
            })
          )}
        </main>
        <aside>
          <Cart
            cartRemoveHandler={cartRemoveHandler}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
