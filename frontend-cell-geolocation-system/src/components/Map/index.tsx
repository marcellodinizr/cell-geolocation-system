import { LeafletMouseEvent } from 'leaflet';
import { Map as LeafletMap, MapProps as LeafletMapProps, TileLayer } from 'react-leaflet';

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode;
  onClick?: (event: LeafletMouseEvent) => void;
}

export function Map({ children, interactive = true, ...props }: MapProps) {
  return (
    <LeafletMap 
      center={[-2.5472069,-44.2147764]} 
      zoom={13} 
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      onClick={interactive ? props.onClick : undefined}
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_APP_MAPBOX_TOKEN}`}
      />
      {children}
    </LeafletMap>
  );
}