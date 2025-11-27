import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Middle from "./components/Middle";
import OrderStatus from "./components/OrderStatus";

function App() {
  return (
    <div className="relative h-screen max-w-7xl m-auto border border-gray-100">
      <Header />
      {/* <Middle /> */}
      <OrderStatus />
      <Footer />
    </div>
  );
}

export default App;
