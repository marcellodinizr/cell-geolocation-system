import { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import { Map } from '../../components/Map';

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

      <Map>

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