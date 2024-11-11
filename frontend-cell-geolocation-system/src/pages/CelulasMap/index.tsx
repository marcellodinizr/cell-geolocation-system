import { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo.svg';
import { api } from '../../services/api';
import { mapIcon } from '../../utils/mapIcon';

import './styles.css';

interface Celula {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export function CelulasMap() {

  const [celulas, setCelulas] = useState<Celula[]>([]);

  useEffect(() => {
    api.get('celulas').then(response => {
      setCelulas(response.data);
    })
  }, []);


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

      <Map center={[-2.5472069,-44.2147764]} zoom={14} style={{ width: '100%', height: '100%'}}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
        />

        {celulas.map(celula => {
          return (
            <Marker
              key={celula.id}
              icon={mapIcon}
              position={[celula.latitude, celula.longitude]}
            >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Célula {celula.name}
              <Link to={`/celulas/${celula.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
          )
        })}
      </Map>


      <Link to="/celulas/create" className="create-celulas">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}