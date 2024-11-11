import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logoImg from '../../images/logo.svg';

import './styles.css';

export function Sidebar() {
  const {goBack} = useHistory();
  
  return(
    <aside className="app-sidebar">
      <img src={logoImg} alt="Aliança" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="rgba(0, 0, 0, 0.6)" />
        </button>
      </footer>
    </aside>
  )
}
