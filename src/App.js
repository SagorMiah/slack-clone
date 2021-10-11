import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
// https://github.com/CleverProgrammers/react-challenge-slack-clone
