import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { postByCatagory } from "../APIRequest/APIRequest";
import Loader from "../Component/Loader";
import BlogList from "../Component/BlogList";

const ByCategoryPage = () => {
  let { catagoryID } = useParams();

  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postByCatagory(catagoryID);
      setList(res);
    })();
  }, [catagoryID]);

  return (
    <div>
      <Layout>
        <Layout>{list === null ? <Loader /> : <BlogList list={list} />}</Layout>
      </Layout>
    </div>
  );
};

export default ByCategoryPage;
