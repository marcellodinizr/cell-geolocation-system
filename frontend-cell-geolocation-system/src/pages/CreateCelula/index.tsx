import { LeafletMouseEvent } from "leaflet";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from "react-router-dom";

import { PrimaryButton } from "../../components/PrimaryButton";
import { SelectInput } from "../../components/SelectInput";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { mapIcon } from "../../utils/mapIcon";
import { timeOfDayOptions, weekdayOptions } from "../../utils/options/data";

import './styles.css';

export function CreateCelula() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

	const [name, setName] = useState('');
	const [about, setAbout] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time_of_day, setTimeOfDay] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([])


  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files) {
      return;
    }
      const selectedImages = (Array.from(event.target.files));
      setImages(selectedImages);

      const selectedPreviewImages = selectedImages.map(image => {
        return URL.createObjectURL(image);
      })

      setPreviewImages(selectedPreviewImages)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('week_day', week_day);
    data.append('time_of_day', time_of_day);
    
    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('celulas', data);

    alert('Célula cadastrada com sucesso');

    history.push('/app');
  }

  return (
    <div id="page-create-celula">
      <Sidebar />
      <main>
        <form onSubmit={handleSubmit}className="create-celula-form">
        <fieldset>
          <legend>Dados</legend>

          <Map
            center={[-2.5472069,-44.2147764]}
            style={{ width: '100%', height: 280 }}
            zoom={13}
						onClick={handleMapClick}
          > 
            <TileLayer
             url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
            />

            { position.latitude !== 0 && (
              <Marker 
                interactive={false} 
                icon={mapIcon} 
                position={[position.latitude,position.longitude]} />
            )}
          </Map>

          <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
								id="name" 
								value={name} 
								onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre seu núcleo e rede <span>Máximo de 300 caracteres</span></label>
              <textarea 
								id="about" 
								maxLength={300} value={about} 
								onChange={event => setAbout(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => {
                  return (
                    <img key={image} src={image} alt={name} />
                  )
                })}

                <label htmlFor="image[]" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </label>

              </div>
              <input multiple onChange={handleSelectImages} type="file" id="image[]" />

            </div>
        </fieldset>

        <fieldset>
            <legend>Dia da semana e hora da célula</legend>

            <div className="input-block">
              <label htmlFor="week_day">Dia da semana</label>
               <SelectInput
                className="select-input"
                name="week_day"
                options={weekdayOptions}
                value={weekdayOptions.find(option => option.value === week_day) ?? null}
                onChange={(option) => setWeekDay(option ? option.value : '')}
              />
            </div>

            <div className="input-block">
              <label htmlFor="time_of_day">Hora</label>
              <SelectInput
                className="select-input"
                name="time_of_day"
                options={timeOfDayOptions}
                value={timeOfDayOptions.find(option => option.value === time_of_day) ?? null}
                onChange={(option: any) => setTimeOfDay(option ? option.value : '')}
              />
            </div>

          </fieldset>

          <PrimaryButton type="submit">Confirmar</PrimaryButton>

        </form>
      </main>

      
    </div>
  );
}

