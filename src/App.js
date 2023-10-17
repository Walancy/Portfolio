import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PAGINA_INICIAL,} from "./routes";
import { PAGINA_DESENVOLVIMENTO} from "./routes";

import { PaginaInicial } from "./pages/PaginaInicial";
import { PaginaDesenvolvimento } from "./pages/PaginaDesenvolvimento";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route exact path={PAGINA_DESENVOLVIMENTO} element={<PaginaDesenvolvimento />} />
      </Routes>
    </BrowserRouter>
  );
};
