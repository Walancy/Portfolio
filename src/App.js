import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PAGINA_INICIAL } from "./routes";
import { PAGINA_DESENVOLVIMENTO } from "./routes";
import { DEV_FRONT_END } from "./routes";
import { LOGO_IDV } from "./routes";
import { MOTION_DESIGN } from "./routes";
import { SOCIAL_MIDIA } from "./routes";
import { UX_UI } from "./routes";

import { PaginaInicial } from "./pages/PaginaInicial";
import { PaginaDesenvolvimento } from "./pages/PaginaDesenvolvimento";
import { DevFrontEnd } from "./pages/Projetos/DevFrontEnd";
import { LogoIDV } from "./pages/Projetos/LogoIDV";
import { MotionDesign } from "./pages/Projetos/MotionDesign";
import { SocialMedia } from "./pages/Projetos/SocialMidia";
import { UxUi } from "./pages/Projetos/UXUI";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={PAGINA_INICIAL} element={<PaginaInicial />} />
        <Route
          exact
          path={PAGINA_DESENVOLVIMENTO}
          element={<PaginaDesenvolvimento />}
        />
        <Route exact path={DEV_FRONT_END} element={<DevFrontEnd />} />
        <Route exact path={LOGO_IDV} element={<LogoIDV />} />
        <Route exact path={MOTION_DESIGN} element={<MotionDesign />} />
        <Route exact path={SOCIAL_MIDIA} element={<SocialMedia />} />
        <Route exact path={UX_UI} element={<UxUi />} />
      </Routes>
    </BrowserRouter>
  );
};
