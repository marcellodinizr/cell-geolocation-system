import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useParams } from "react-router-dom";

import { PrimaryButton } from "../../components/PrimaryButton";
import { Sidebar } from '../../components/Sidebar';
import { api } from "../../services/api";
import { mapIcon } from "../../utils/mapIcon";

import './styles.css';

interface Celula {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  week_day: string;
  time_of_day: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface CelulaParams {
  id: string;

}

export function Celula() {
  const params = useParams<CelulaParams>();
    const [celula, setCelula] = useState<Celula>();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`celulas/${params.id}`).then(response => {
      setCelula(response.data);
    })
  }, [params.id]);

  if (!celula) {
    return <div>Carregando...</div>;
  }

  return (
    <div id="page-celula">
      <Sidebar />

      <main>
        <div className="celula-details">
          <img src={celula.images[activeImageIndex].url} alt={celula.name} />

          <div className="images">
            {celula.images.map((image, index) => {
              return (
                <button
                  key={image.id} 
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index)
                  }}
                  >
                  <img src={image.url} alt={celula.name} />
                </button>
              )
            })}
          </div>
          
          <div className="celula-details-content">
            <h1>{celula.name}</h1>
            <p>{celula.about} </p>

            <div className="map-container">
            <Map 
              center={[celula.latitude,celula.longitude]}
              zoom={14}
              style={{ width: '100%', height: 280}}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
                />

        <Marker
          icon={mapIcon}
          position={[celula.latitude,celula.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Célula Galileu
              <Link to="/celulas/1">
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
            </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${celula.latitude},${celula.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Dia e Hora da semana</h2>

            <div className="open-details">
              <div className="week-day">
                <FiInfo size={32} color="#15B6D6" />
                 {celula.week_day}<br />
      
              </div>
              <div className="time-of-day">
                <FiClock size={32} color="#39CC83" />
                
                {celula.time_of_day} <br />
                
              </div>
            </div>

            <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton>
          </div>
        </div>
      </main>
    </div>
  );
}