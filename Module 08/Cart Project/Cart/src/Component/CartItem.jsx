import React from "react";

const CartItem = ({ product = {}, remove }) => {
  const { title, image, price, id } = product;
  return (
    <div className="card card-side bg-white shadow-xl">
      <figure>
        <img className="w-40" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{title}</h6>
        <h3 className="text-xl font-bold text-gray-700">{price}</h3>
        <div className="card-actions justify-end">
          <button
            onClick={() => remove(id)}
            className="btn btn-sm btn-primary btn-outline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
