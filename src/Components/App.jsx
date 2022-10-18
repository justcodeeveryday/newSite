import React from "react";
import Header from "./Header.jsx";
import HeaderBanner from "./Headerbanner";
import Middle from "./Middle";
import NextMiddle from "./NextMiddle";
import Last from "./Last";
import Footer from "./Footer";
import Naplata from "./Naplata";
import Blog from "./Blog.jsx";

function App() {
  return (
    <div>
      <Header />
      <HeaderBanner />
      <NextMiddle />
      <Middle />
      <Last />
      <Naplata />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
