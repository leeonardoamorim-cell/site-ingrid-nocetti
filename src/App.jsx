import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ContentSections from './components/ContentSections.jsx';
import Footer from './components/Footer.jsx';
import Overlays from './components/Overlays.jsx';
import { setupInteractions } from './interactions.js';
export default function App() {
 useEffect(setupInteractions, []);
 return <><a className="skip" href="#conteudo">Ir para o conteúdo</a><Header /><main id="conteudo"><Hero /><ContentSections /></main><Footer /><Overlays /></>;
}
