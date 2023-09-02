import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <div className="container mx-auto my-16 p-9 grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      {props.list.map((item, index) => {
        return (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <Link to={"/details/" + item["id"]}>
              <figure>
                <img
                  className="card__thumbnail"
                  src={item["img"]}
                  alt="Shoes"
                />
              </figure>
            </Link>
            <div className="card-body">
              <h2 className="card-title">{item["title"]}</h2>
              <p>{item["short"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
