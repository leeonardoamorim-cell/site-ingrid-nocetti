import child from '../assets/child.webp';
import portrait from '../assets/portrait.webp';
import care from '../assets/care.webp';
import logo from '../assets/logo.webp';
import adult from '../assets/adult.webp';
import therapy from '../assets/therapy.webp';
export default function Hero(){return (<>
<section id="inicio" className="hero wrap"><div className="hero-copy"><div className="eyebrow"><span></span> INGRID NOCETTI · FISIOTERAPEUTA</div><h1>Mais movimento.<br />Mais autonomia.<br /><em>Mais vida.</em></h1><p className="lead">Fisioterapia neurofuncional e cuidado humanizado no conforto do seu lar.</p><p>Um atendimento personalizado para cuidar da sua mobilidade e qualidade de vida, respeitando sua história e o seu tempo.</p><div className="actions"><a className="button wa" href="https://wa.me/5548996544245">Agendar minha avaliação <span>↗</span></a><a className="text-link" href="#especialidades">Conheça meus atendimentos ↓</a></div><div className="location"><span>⌖</span> Florianópolis, São José e Biguaçu</div></div><div className="hero-image"><div className="image-frame"><img src={portrait} alt="Fisioterapeuta Ingrid Nocetti com jaleco branco e estetoscópio" fetchPriority="high" /></div><div className="photo-label"><span className="heart">♡</span><div>Cuidado que acolhe.<br /><strong>Fisioterapia que aproxima.</strong></div></div><span className="vertical">CUIDADO INDIVIDUALIZADO, EM CADA DETALHE</span></div></section>
</>);}
