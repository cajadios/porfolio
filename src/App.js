
import foto from "./imagenes/foto.png"
import linkedin from "./imagenes/linkedin.png"
import mail from "./imagenes/mail.png"
import "./App.css"

function App() {
  function click(){
   alert("santiago.e.venturini@hotmail.com")
  }
  return (
    <div className="padre">

      <div >

        <div className="nombre">
          <img src={foto} className="foto" alt="foto" />
          <div className="fuente-titulo">
          <p >
            Santiago Emanuel Venturini: Desarrollador Full Stack
          </p>
          </div>
        </div>


        <div className="info">
          <p className="fuente-generica">
            Sobre mí:
          </p>
          <p className="fuente-generica">
            Soy un desarrollador Full Stack que siempre sigue aprendiendo , busco mejorar mis conocimientos a través del trabajo y trato en mi tiempo libre de probar tecnologías que desconozco en pequeños proyectos personales.
          </p>
        
        </div>

        <div >
          <p className="fuente-generica">Conocimientos: HTML, JavaScript, Node JS, React., SQL, Express, Redux. CSS.</p>
        </div>

        <div >
          <a href="https://www.linkedin.com/in/santiago-venturini-215a99255/">
            <img className="icono" src={linkedin} alt="Linkedin" />
          </a>
          <button className="boton" onClick={click}>
              <img className="icono" src={mail} alt="correo" /> 
              </button>
        </div>


      </div>
    </div>
  );
}

export default App;
