import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Middle from "./components/Middle";
import SuccessScreen from "./components/SuccessScreen";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="relative max-w-7xl m-auto h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Middle />}></Route>
        {/* <Route path="/success-screen" element={<SuccessScreen />}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
