import child from '../assets/child.webp';
import portrait from '../assets/portrait.webp';
import care from '../assets/care.webp';
import logo from '../assets/logo.webp';
import adult from '../assets/adult.webp';
import therapy from '../assets/therapy.webp';
export default function Header(){return (<>
<header><a className="brand" href="#inicio" aria-label="Ingrid Nocetti, início"><img src={logo} alt="Ingrid Nocetti Fisioterapeuta" /></a><button className="menu" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu">☰</button><nav id="nav"><a href="#inicio">Início</a><a href="#especialidades">Especialidades</a><a href="#sobre">Sobre mim</a><a href="#atendimento">Atendimento</a><a href="#trabalho">Meu trabalho</a><a href="#contato">Contato</a><a className="button small wa" href="https://wa.me/5548996544245">Agendar atendimento <span>↗</span></a></nav></header>
</>);}
