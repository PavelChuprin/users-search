import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Sort from "../../components/Sort";
import Items from "../../components/Items";

const MainPage = () => {
  const [showResultsBlock, setShowResultsBlock] = React.useState(false);

  return (
    <>
      <Header />
      <Search setShowResultsBlock={setShowResultsBlock} />
      {showResultsBlock && (
        <>
          <Sort />
          <Items />
        </>
      )}
    </>
  );
};

export default MainPage;
