import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ModelType from "./datamodel/modelType";
import News from "./datamodel/news";

function App() {
  return (
    <div>
      <ModelType />
      <News />
    </div>
  );
}

export default App;
