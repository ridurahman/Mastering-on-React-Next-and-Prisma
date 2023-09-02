import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import CartItem from "./CartItem";
import {
  allCartProducts,
  createCart,
  removeCart,
} from "../APIRequest/APIRequest";

const CartList = () => {
  const [items, setItems] = useState([]);
  //const { state } = useLocation();
  //console.log("🚀 ~ file: CartList.jsx:9 ~ CartList ~ state:", state.iid);

  useEffect(() => {
    allCartProducts()
      .then((data) => {
        // if (data) {
        //   const resData = data?.data?.filter((i) => {
        //     return i === state.iid;
        //   });
        // }
        if (data?.msg === "success") {
          setItems(data?.data);
        }
      })
      .catch((err) => console.log("There was an error: " + err));
    // if (state) {
    //   createCart(state.iid)
    //     .then((data) => {
    //       if (data?.msg == "success") {
    //         alert("The product was added to cart");
    //       }
    //     })
    //     .catch((err) => console.log("There was an error: " + err));
    // }
  }, []);

  const handleRemoveCart = (productId) => {
    removeCart(productId)
      .then((data) => {
        if (data?.msg === "success") {
          const remainingItems = items.filter(
            (item) => item.product.id !== productId
          );
          setItems(remainingItems);
        }
      })
      .catch((err) => console.log("There was an error" + err));
  };

  const calculateTotalPrice = () => {
    const totalPrice = items.reduce((total, currentValue) => {
      const priceString = currentValue.product.price;
      const priceStringWithoutComma = priceString.replace(/,/g, "");
      const price = parseInt(priceStringWithoutComma);

      return total + price;
    }, 0);
    return totalPrice;
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {items.map((item) => (
              <CartItem
                key={item?.id}
                product={item.product}
                remove={handleRemoveCart}
              />
            ))}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: {items.length}</h2>
            <h6>Total Price: {calculateTotalPrice()}</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartList;
