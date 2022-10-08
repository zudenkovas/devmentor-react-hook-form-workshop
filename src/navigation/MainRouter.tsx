import { Routes, Route } from "react-router-dom";
import CountriesContainer from "containers/Countries";
import CountryContainer from "containers/Country";
import { RouteKey } from "./routes";

const MainRouter = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<CountriesContainer />} />
    <Route path={RouteKey.Countries} element={<CountriesContainer />} />
    <Route path={RouteKey.Country} element={<CountryContainer />} />
  </Routes>
);

export default MainRouter;
