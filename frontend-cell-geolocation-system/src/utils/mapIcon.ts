import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

export const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [42, 52],
  iconAnchor: [21, 52],
  popupAnchor: [170, 2]
})