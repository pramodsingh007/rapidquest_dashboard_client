import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
      navigate("/dashboard");
  },[navigate])
  return <div className="dark:text-white">Home</div>;
};

export default Home;
