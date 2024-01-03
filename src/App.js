import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Items from "./components/Items";

function App() {
  const [showResultsBlock, setShowResultsBlock] = React.useState(false);

  return (
    <div className="wrapper">
      <Header />
      <Search setShowResultsBlock={setShowResultsBlock} />
      {showResultsBlock && (
        <>
          <Sort />
          <Items />
        </>
      )}
    </div>
  );
}

export default App;
