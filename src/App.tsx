import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default App;
