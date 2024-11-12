import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiClock, FiInfo } from "react-icons/fi";
import { Marker, Popup } from "react-leaflet";
import { Link, useParams } from "react-router-dom";

import Placeholder from "../../assets/placeholder.png";
import { Map } from "../../components/Map";
import { PrimaryButton } from "../../components/PrimaryButton";
import { Sidebar } from '../../components/Sidebar';
import { api } from "../../services/api";
import { mapIcon } from "../../utils/mapIcon";

import './styles.css';

interface Celula {
  latitude: number;
  longitude: number;
  name: string;
  nucleus: string;
  network: string;
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

  const hasImages = celula.images && celula.images.length > 0;
  const currentImageUrl = hasImages ? celula.images[activeImageIndex].url : Placeholder;

  return (
    <div id="page-celula">
      <Sidebar />

      <main>
        <div className="celula-details">
          <img src={currentImageUrl} alt={celula.name} />

          <div className="images">
            {hasImages ? (
              celula.images.map((image, index) => (
                <button
                  key={image.id}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.url} alt={celula.name} />
                </button>
              ))
            ) : (
              <p>Sem imagens disponíveis</p>
            )}
          </div>
          
          <div className="celula-details-content">
            <h1>Célula {celula.name}</h1>
            <h3>{"Núcleo da " + celula.nucleus + ", do Setor de " + celula.network}</h3>



            <div className="map-container">
            <Map
              center={[celula.latitude,celula.longitude]}
              zoom={14}
              style={{ width: '100%', height: 280}}
              >

        <Marker
          icon={mapIcon}
          position={[celula.latitude,celula.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {celula.name}
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

            <h2>Dia e horário da célula</h2>

            <div className="open-details">
              <div className="week-day">
                <FiInfo size={32} color="#0C1F72" />
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