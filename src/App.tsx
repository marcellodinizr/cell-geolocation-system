import { FiArrowRight } from 'react-icons/fi'
import logoImg from './images/logo.svg'

import './styles/global.css'
import './styles/pages/landing.css'

export function App() {
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

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
     </div>
    </div>
  )
}
