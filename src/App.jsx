import './App.css'
import Portada from './Components/Portada'
import VentajasGestoria from './Components/VentajasGestoria'
import ServicioAutomotor from './Components/ServicioAutomotor'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ServicioInmobiliario from './Components/ServicioInmobiliario'


function App() {

  return (
    <>
      <Navbar />
      <Portada />
      <VentajasGestoria />
      <ServicioAutomotor />
      <ServicioInmobiliario/>
      <Footer />
    </>
  )
}


export default App
