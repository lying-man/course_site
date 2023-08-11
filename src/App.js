import React from "react";
import global from "./Styles/global.scss";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main";
import Grid from "./components/Grid/Grid";
import Course from "./components/Course/Course";
import Questions from "./components/Questions/Questions";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-wrapper">
        <Main />
        <Grid />
        <Course />
        <Questions />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
