import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/aurora/styles/aurora-global.css"
import "./Assets/aurora/styles/aurora-footer.css"
import "./Assets/aurora/styles/aurora-dark-mode.css"
import "./Assets/aurora/styles/aurora-ribbon.css"
import NavHeader from "./Base/Components/NavHeader"
import MainPage from "./Base/Core/Main"
import Included from './Base/Core/Included';
import Ribbon from './Base/Components/Ribbon';
import Footer from "./Base/Components/Footer";
import Terms from './Base/Core/Terms';

function App() {
  return (
    <body id="overview" className="dmf" data-color-scheme="light">
      <Ribbon />
      <input type="checkbox" id="auroranav-menustate" className="auroranav-menustate" />
      <div id="auroranav-sticky-placeholder" className="css-sticky auroranav-sticking" />
      <NavHeader />
      <label id="auroranav-curtain" htmlFor="auroranav-menustate" />
      <div id="auroranav-viewport-emitter" data-viewport-emitter-dispatch="" data-viewport-emitter-state="{&quot;viewport&quot;:&quot;large&quot;,&quot;orientation&quot;:&quot;landscape&quot;,&quot;retina&quot;:false}"></div>
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/included" element={<Included />} />
            <Route exact path="/legal/terms" element={<Terms />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </body>
  );
}

export default App;
