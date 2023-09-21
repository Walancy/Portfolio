import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PAGINA_INICIAL,} from "./routes";

import { PaginaInicial } from "./pages/PaginaInicial";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
  );
};
