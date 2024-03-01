import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Router = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default Router;
