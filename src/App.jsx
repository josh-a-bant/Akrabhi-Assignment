import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Middle from "./components/Middle";
import OrderStatus from "./components/OrderStatus";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="relative max-w-7xl m-auto h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Middle />}></Route>
        <Route path="/order-status" element={<OrderStatus />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
