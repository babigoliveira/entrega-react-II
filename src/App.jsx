import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Repositories from "./components/Repositories/Repositories";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Repositories />
      <Footer />
    </>
  );
}
export default App;
