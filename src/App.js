import React from 'react';
import About from "./components/About";
import Main from "./components/Main";
import Team from "./components/Team";
import Note from "./components/Note";
import Sponcers from './components/Sponcers';
import Footer from './components/Footer';
import Join from "./components/Join";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Team />
      <Join />
      <Note />
      <Sponcers />
      <Footer />
    </div>
  );
}

export default App;
