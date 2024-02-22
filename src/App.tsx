import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterPage from "./pages/CharacterPage";
import MainPage from "./pages/MainPage";
import EpisodesPage from "./pages/EpisodesPage";
import CharacterInfoPage from "./pages/CharacterInfoPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const routeObjects = [
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/characters",
      element: <CharacterPage />,
    },
    {
      path: "/characters/:id",
      element: <CharacterInfoPage />,
    },
    {
      path: "/episodes",
      element: <EpisodesPage />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {routeObjects?.map((route) => (
          <Route key={route.path} path={route?.path} element={route?.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
