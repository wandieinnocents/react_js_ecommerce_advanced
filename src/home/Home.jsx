import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import AboutUs from "./AboutUs";
import Sponser from "./Sponser";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Home categories */}
      <HomeCategory />

      {/* category showcase */}
      <CategoryShowCase />

      {/* register */}
      <Register />

      <AboutUs />

      <Sponser />
    </div>
  );
};

export default Home;
