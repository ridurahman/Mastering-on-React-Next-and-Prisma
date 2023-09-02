import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = (props) => {
  return (
    <div>
      <div className="container mx-auto my-16 px-16 py-5 text-center">
        <h1 className="text-2xl font-bold p-5">
          {props.list["postDetails"]["title"]}
        </h1>
        <div className="shadow-xl text-justify">
          <figure>
            <img src={props.list["postDetails"]["img"]} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>{props.list["postDetails"]["content"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
