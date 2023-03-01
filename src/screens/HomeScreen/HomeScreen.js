import React from "react";
import Slider from "../../components/Slider/Slider";
import Categories from "../../components/Categories/Categories";
import AdCards from "../../components/AdSection/AdCards";
import AdPoster from "../../components/AdSection/AdPoster";
import FooterVideo from "../../components/Footer/FooterVideo";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import FeaturedProducts from "../../components/Products/FeaturedProducts";
import TopSellingCarousel from "../../components/Top Selling/TopSellingCarousel";

const HomeScreen = () => {
  return (
    <>
      <Slider />
      <TopSellingCarousel />
      <Categories />
      <AdPoster />
      <AdCards />
      <FeaturedProducts />
      {/* <NewArrivals /> */}
      <FooterVideo />
    </>
  );
};
export default HomeScreen;
