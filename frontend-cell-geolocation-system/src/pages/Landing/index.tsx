import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import './styles.css';

export function Landing() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
      <img src={logoImg} alt="Aliança" />
      
        <main>
          <h1>Visite uma de nossas células</h1>
          <p>As terças, quintas, sextas e sábados.</p>
        </main>

        <div className="location">
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
     </div>
    </div>
  )
}