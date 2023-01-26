import { MapContainer, TileLayer, Polyline, useMap, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import polyline from '@mapbox/polyline';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import './style.scss';
import { useEffect, useState } from 'react';

const SetBoundsPolylineRoad = ({ polylineRoad }) => {
  const map = useMap();

  map.fitBounds(polylineRoad);

  return <Polyline positions={polylineRoad} />;
};

const markerIcon = new Icon({
  iconUrl: require('../../assets/img/point.png'),
  iconSize: [32, 32],
  className: 'RoadMap__Icon',
});

const RoadMap = () => {
  const [polylineRoad, setPolylineroad] = useState([]);
  const roadMapData = useSelector((state) => state.roadMap.data);

  useEffect(() => {
    if (Object.keys(roadMapData).length !== 0) {
      const coord = polyline.decode(roadMapData.routes[0].geometry);
      setPolylineroad(coord);
    }
  }, [roadMapData]);

  return (
    <MapContainer
      center={[55.755864, 37.617698]}
      bounds={polylineRoad.length ? polylineRoad : undefined}
      className="RoadMap"
      zoom={13}
      scrollWheelZoom={true}
    >
      {polylineRoad.length && (
        <>
          <SetBoundsPolylineRoad polylineRoad={polylineRoad} />
          <Marker className position={polylineRoad.at(0)} icon={markerIcon} />
          <Marker position={polylineRoad.at(-1)} icon={markerIcon} />
        </>
      )}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export { RoadMap };
