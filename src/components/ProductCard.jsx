import { useState } from "react";
import { product } from "../data/product";
import "../styles/styles.css";

export default function ProductCard() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % product.images.length);
  };

  const prev = () => {
    setIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="card">
      <div className="carousel">
        <img src={product.images[index]} alt="product" />
        <button
          style={{ position: "absolute", top: "45%", left: 10 }}
          onClick={prev}
        >
          ◀
        </button>
        <button
          style={{ position: "absolute", top: "45%", right: 10 }}
          onClick={next}
        >
          ▶
        </button>
      </div>

      <div className="info">
        <div className="title">{product.name}</div>
        <div className="price">${product.price}</div>

        <select className="select">
          {product.variants.map((v, i) => (
            <option key={i}>{v}</option>
          ))}
        </select>

        <button className="btn" disabled={!product.inStock}>
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}
