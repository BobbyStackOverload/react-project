import React from "react";
import ChoreListContextProvider from "../context/ChoreListContext";
import ChoreList from "./ChoreList";
import ChoreForm from "./ChoreForm";
import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <ChoreListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <ChoreForm />
            <ChoreList />
          </div>
        </div>
      </div>
    </ChoreListContextProvider>
  );
};

export default App;