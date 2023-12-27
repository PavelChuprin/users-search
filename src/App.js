import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Search />
      <Sort />
      <Items />
    </div>
  );
}

export default App;
