import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
