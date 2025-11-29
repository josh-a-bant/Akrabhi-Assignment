import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Middle from "./components/Middle";
import OrderStatus from "./components/OrderStatus";

function App() {
  return (
    <div className="relative max-w-7xl m-auto ">
      <Header />
      <Middle />
      {/* <OrderStatus /> */}
      <Footer />
    </div>
  );
}

export default App;
