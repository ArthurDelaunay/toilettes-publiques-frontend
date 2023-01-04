import { createContext, useState, useEffect } from "react"

const MapContext = createContext({})

const MapContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        })
      },
      () => {
        setLocation({
          lat: 48,
          lng: 2,
        })
      }
    )
  }, [])
  const value = {
    location,
  }
  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export { MapContextProvider, MapContext }
