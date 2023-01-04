import { useContext } from "react"
import { MapContext } from "../contexts/Map"
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import { Icon } from "leaflet"

import "leaflet/dist/leaflet.css"
import "./Map.css"

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png",
  iconSize: [25, 39],
})

const Map = () => {
  const { location } = useContext(MapContext)
  if (!location) {
    return <p>loading</p>
  } else {
    return (
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {bars.map((bar) => {
          return (
            <Marker
              key={bar.id}
              position={[bar.latitude, bar.longitude]}
              icon={markerIcon}
            >
              <Tooltip stricky direction="bottom" opacity={1}>
                {bar.name} <br />
                {bar.address} <br />
                Prix de la pinte : {bar.price} €
              </Tooltip>
            </Marker>
          )
        })} */}
      </MapContainer>
    )
  }
}

export default Map
