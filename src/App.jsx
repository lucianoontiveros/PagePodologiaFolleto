import BotonCopiar from "./boton"


function App() {

  return (
    <><div className="container_fondo bg-dark"> 
        <div className="container_fondo-navbar bg-dark">
          <h5>Para consultas y citas</h5>
          <BotonCopiar text="Patricia Podologia: +54 9 3518 09-5044"/>
        </div>
        <div className="container">
          <div className="container_servicios">
            <span>Hiperqueratosis</span>
            <span>Queratosis</span>
            <span>Helomas - callos</span>
            <span>Onicocriptosis</span>
            <span>Onicotomia</span>
            <span>Onicomicosis</span>
            <span>Pie diabeticos</span>
            <span>y más servicios</span>
          </div>
          <span>"Cuidando cada uno de tus pasos"</span>
          <h1>PODOLOGÍA PROFESIONAL</h1>
        </div>
      </div>
        
    </>
  )
}

export default App



