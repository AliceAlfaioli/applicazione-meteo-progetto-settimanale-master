import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ComponentNavbar from "./components/ComponentNavbar";
import ComponentMain from "./components/ComponentMain";
import ComponentSearchBar from "./components/ComponentSearchBar";
import ComponentDetail from "./components/ComponentDetail";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearchSubmit = (city, countryCode) => {
    setCity(city);
    setCountryCode(countryCode);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <ComponentNavbar />
        </header>
        <div className="App-header">
          <Routes>
            <Route
              element={
                <>
                  <ComponentSearchBar onSubmit={handleSearchSubmit} />
                  <ComponentMain city={city} countryCode={countryCode} />
                </>
              }
              path="/"
            />
            <Route element={<ComponentDetail city={city} countryCode={countryCode} />} path="/detail" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
