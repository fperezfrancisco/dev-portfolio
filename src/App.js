import "./index.css";
import Main from "./components/Main.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  /** unused 
   * <div className="gradientBlueGreen heroDecoration"></div>
    <div className="gradientBluePurple heroDecoration"></div>
   */
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
