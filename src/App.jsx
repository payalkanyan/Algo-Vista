import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Visualize from "./pages/Visualize";
import Sort from "./components/sortingComponents/sort";

import Search from "./components/searchComponents/search";
import RecursiveSort from "./components/recursiveSortingComponents/recursiveSort";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Hero />}
          />
          <Route path="/visualize" element={<Visualize />} />
          <Route path="/visualize/sort" element={<Sort />} />
          <Route path="/visualize/recursive-sort" element={<RecursiveSort />} />
          <Route path="/visualize/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
