import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Components/AppLayout";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={AppLayout} />
      <Route path="excutive" element={<LandingPage />} />
      <Route path="workunit" element={<LandingPage />} />
      <Route path="home" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
