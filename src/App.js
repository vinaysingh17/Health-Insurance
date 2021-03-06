import { Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import CruiseList from "./screens/CruiseList/CruiseList";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SocialIcons from "./components/SocialIcons/SocialIcons";

function App() {
  return (
    <div>
      <Navbar />
      <SocialIcons />
      <Routes>
        <Route path="/cruise-list" element={<CruiseList />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
