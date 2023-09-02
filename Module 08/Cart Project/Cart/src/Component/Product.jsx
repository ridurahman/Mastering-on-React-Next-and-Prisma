import React, { useEffect, useRef } from "react";
import { createCart } from "../APIRequest/APIRequest";
import { useNavigate, useLocation } from "react-router-dom";

const Product = ({ item = {} }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const pItem = useRef();
  // console.log("🚀 ~ file: OTP-Page.jsx:12 ~ Product ~ pItem:", pItem);
  // pItem.current = state ? state.proId : "";
  // console.log(
  //   "🚀 ~ file: OTP-Page.jsx:12 ~ Product ~ pItem.current:",
  //   pItem.current
  // );

  // useEffect(() => {
  //   if (state) {
  //     createCart(pItem.current)
  //       .then((data) => {
  //         console.log("🚀 ~ file: Product.jsx:20 ~ .then ~ data:", data);
  //         const oneceTrueCheck = Object.values(data).find(
  //           (i) => item.id === pItem.current
  //         );
  //         if (oneceTrueCheck) {
  //           // alert("Hoisa");
  //           console.log("Hoisa");
  //         }
  //       })
  //       .catch((err) => console.log("There was an error: " + err));
  //   }
  // }, []);

  const handleAddToCart = () => {
    if (localStorage.getItem("token") === null) {
      // navigate(`/login?pId=${item.id}`);
      navigate(`/login`, {
        state: { itemId: item.id ? item.id : null },
      });
    } else {
      createCart(item.id)
        .then((data) => {
          if (data?.msg == "success") {
            alert("The product was added to cart");
          }
        })
        .catch((err) => console.log("There was an error: " + err));
    }
  };

  return (
    <>
      <div className="card m-2 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={item.image} alt={item.title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.short_des}</p>
          <h3 className="card-price">Price: ${item.price}</h3>
          <div className="card-actions">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
