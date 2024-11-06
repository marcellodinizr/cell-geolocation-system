import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import logoImg from '../images/logo.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/cells-map.css';

export function CellsMap() {

  return (
    <div id="page-map">
      <aside>
        <header>
        <img src={logoImg} alt="Aliança" />

        <h2>Escolha uma célula no mapa</h2>
        <p>Venha conhecer uma de nossas células.</p>
        </header>

        <footer>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </footer>
      </aside>

      <MapContainer center={[-2.5472069,-44.2147764]} zoom={14} style={{ width: '100%', height: '100%'}}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
        />
      </MapContainer>


      <Link to="" className="create-cells">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}