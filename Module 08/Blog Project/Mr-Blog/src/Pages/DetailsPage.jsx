import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { postDetails } from "../APIRequest/APIRequest";
import { useParams } from "react-router-dom";
import BlogDetails from "../Component/BlogDetails";
import Loader from "../Component/Loader";

const DetailsPage = () => {
  let { postID } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postDetails(postID);
      setList(res);
    })();
  }, [postID]);

  return (
    <div>
      <Layout>
        {list === null ? <Loader /> : <BlogDetails list={list} />}
      </Layout>
    </div>
  );
};

export default DetailsPage;
