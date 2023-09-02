import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";
import { allProducts, createCart } from "../APIRequest/APIRequest";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    allProducts()
      .then((data) => setList(data))
      .catch((err) => setError(err));
  }, []);

  const pItem = useRef();
  console.log("🚀 ~ file: OTP-Page.jsx:12 ~ Product ~ pItem:", pItem);
  pItem.current = state ? state.proId : "";
  console.log(
    "🚀 ~ file: OTP-Page.jsx:12 ~ Product ~ pItem.current:",
    pItem.current
  );

  if (state) {
    createCart(pItem.current)
      .then((data) => {
        // console.log("🚀 ~ file: Product.jsx:20 ~ .then ~ data:", data);
        // const oneceTrueCheck = Object.values(data).find(
        //   (i) => item.id === pItem.current
        // );
        // if (oneceTrueCheck) {
        //   // alert("Hoisa");
        //   console.log("Hoisa");
        // }
        if (data?.msg == "success") {
          alert("The product was added to cart");
        }
      })
      .catch((err) => console.log("There was an error: " + err));
  }

  let output = "";
  if (error) {
    output = <div>There was an error</div>;
  } else if (list?.length > 0) {
    console.log(list);
    output = list.map((item) => <Product key={item.id} item={item} />);
  } else {
    <div>No products found</div>;
  }

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4">
        {output}
      </div>
    </div>
  );
};

export default ProductList;
