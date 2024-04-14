import './App.css'
import Portada from './Components/Portada'
import VentajasGestoria from './Components/VentajasGestoria'
import ServicioAutomotor from './Components/ServicioAutomotor'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ServicioInmobiliario from './Components/ServicioInmobiliario'
import Contacto from './Components/Contacto'
import SobreMi from './Components/SobreMi'
import ServicioGeneral from './Components/ServicioGeneral'


function App() {

  return (
    <>
      <Navbar />
      <Portada />
      <VentajasGestoria />
      <ServicioGeneral/>
      <ServicioAutomotor />
      <ServicioInmobiliario/>
      <SobreMi/>
      <Contacto/>
      <Footer />
    </>
  )
}


export default App
