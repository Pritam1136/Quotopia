import Foot from "./components/Foot";
import Header from "./components/Header";
import Body from "./components/body";
import { Docs } from "./HeaderComponents/Docs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        <Foot />
      </Router>
    </div>
  );
}
