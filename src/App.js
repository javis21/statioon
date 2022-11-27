import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllStations from "./pages/AllStations";
import NewStation from "./pages/NewStation";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

const App = () => {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllStations />}></Route>
            <Route path="new_station" element={<NewStation />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesContextProvider>
  );
};

export default App;
