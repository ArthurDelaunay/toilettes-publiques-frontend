import { MapContextProvider } from "./contexts/Map"
import Home from "./components/Home"

const App = () => {
  return (
    <MapContextProvider>
      <Home />
    </MapContextProvider>
  )
}

export default App
