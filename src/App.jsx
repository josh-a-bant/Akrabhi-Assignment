import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Middle from "./components/Middle";

function App() {
  return (
    <div className="relative h-screen max-w-7xl m-auto border border-gray-100">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
