// eslint-disable-next-line no-unused-vars
import React from "react";
import monjita from "./assets/monjita.jpg";
import bateria from "./assets/bateria.png";
import licuadora from "./assets/licuadora.png";
import plancha from "./assets/plancha.png";
import cobertor from "./assets/cobertor.jpg";
import tiroides from "./assets/tiroides.jpg";
import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <h1 style={{ textAlign: "center" }}>Rifa con causa</h1>
      <h3 style={{ textAlign: "center" }}>
        La rifa se llevara a cabo el día Domingo 31 de diciembre del 2023. En la
        base de Urbanos Rojos. A las 11:00 de la mañana.
      </h3>
      <h2 style={{ textAlign: "center" }}>
        Todo lo recaudado será donado en apoyo a nuestro compañero Pedro Lucas
        Fidel.
      </h2>
      <p>💲 30 Pesos el boleto.💲</p>
      <p>
        Ganate una Bateria para cocina, una licuadora, una plancha o un
        cobertor.
      </p>

      <p>
        Muchas gracias a todos nuestros donantes. Esto no estaría siendo posible
        sin ustedes. Gracias a la sociedad en general por hacernos sentir
        acompañados en estos momentos tan difíciles.
      </p>
      <h3 style={{ textAlign: "center" }}>❤ De corazon. MIL GRACIAS. ❤</h3>
      <hr></hr>

      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Primer premio.</h2>
        <img src={bateria} />
        <p>
          Batería de Cocina Cinsa Granito Jade Menta De 12 Piezas CINSA Granito
          Jade Menta De 12 Piezas.
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Segundo premio.</h2>
        <img src={licuadora} />
        <p>Licuadora Oster Reversible Roja 3 Velocidades.</p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Tercer premio.</h2>
        <img src={plancha} />
        <p>Plancha de Vapor Quick N Easy de Black & Decker, en Azul.</p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Cuarto y quinto premio.</h2>
        <img src={cobertor} />
        <p>Cobertor providencia.</p>
      </div>

      <h1 style={{ textAlign: "center" }}>Dinámica.</h1>
      <div>
        <p>
          El día de la rifa, que tendrá lugar el domingo 31 de diciembre de 2023
          a las 11 de la mañana, todos los boletos serán depositados en un
          frasco. La secuencia de premiación comenzará con el primer cobertor,
          seguido por el segundo cobertor, la plancha, la licuadora y,
          finalmente, la batería para cocina.
        </p>
        <p>
          Durante el evento, se solicitará la colaboración del público para
          seleccionar uno o varios boletos. La audiencia decidirá si el premio
          se otorga al primer boleto seleccionado, al segundo, o al tercero y
          así sucesivamente.
        </p>
        <p>
          La persona afortunada que resulte ganadora deberá presentar su boleto
          original o, en su defecto, su Identificación Nacional de Elector (INE)
          para reclamar su premio. En caso de que la persona ganadora no esté
          presente, se le realizará una llamada. Si no responde a la segunda
          llamada, su boleto será descartado y se procederá a seleccionar otro
          boleto.
        </p>
        <p>
          {" "}
          En caso de contestar, la persona ganadora deberá presentarse en la
          terminal de Urbanos Rojos para recibir su premio antes de las 8 de la
          noche del mismo día, presentando su boleto o su INE.
        </p>
        <p>
          {" "}
          Agradecemos de antemano la participación y colaboración de todos.
          ¡Mucha suerte a todos los participantes!
        </p>
        <div>
          <h1 style={{ textAlign: "center" }}>Historia</h1>
          <p>
            Todo comenzó con una aparente simple inflamación de garganta que,
            inicialmente, se asumió como una infección respiratoria común. A
            pesar de los tratamientos convencionales para las afecciones de
            garganta, el malestar persistía. Preocupado por la falta de mejoras,
            el paciente decidió buscar la opinión de especialistas.
          </p>
          <p>
            El 20 de octubre de 2023, sometido a un proceso de diagnóstico más
            detallado, le realizaron un ultrasonido de la tiroides. Los
            resultados revelaron una condición inesperada: sialoadenitis
            bilateral, una inflamación de las glándulas salivales. A partir de
            ese momento, el paciente se embarcó en un tratamiento específico
            para abordar esta afección.
          </p>
          <p>
            A pesar de las expectativas, el tratamiento no brindó el alivio
            esperado y, preocupados por la progresión de la enfermedad, los
            especialistas decidieron su ingreso al Hospital de Especialidades en
            Puebla el domingo 10 de noviembre de 2023. Después de una cuidadosa
            observación y tratamiento intensivo, el paciente fue dado de alta el
            martes 12 de noviembre.
          </p>
          <p>
            Sin embargo, la persistencia de los síntomas llevó a una nueva fase
            de tratamiento. El jueves 14 de diciembre de 2023, el paciente fue
            ingresado al Hospital General de Teziutlán. Actualmente, se
            encuentra bajo cuidado médico continuo mientras los profesionales de
            la salud trabajan diligentemente para identificar la causa
            subyacente de la sialoadenitis bilateral y brindar el tratamiento
            más efectivo.
          </p>
          <p>
            La situación se ha visto agravada por la incapacidad del paciente
            para trabajar debido a su malestar, ya que lleva dos meses sin poder
            desempeñar sus labores. Además, carece de seguro médico, lo que ha
            resultado en gastos significativos y ninguna entrada económica. En
            un esfuerzo por respaldarlo económicamente, se ha organizado una
            rifa para recaudar fondos y ayudar a cubrir los costos médicos y el
            sustento diario.
          </p>
          <p>
            El paciente y su familia enfrentan este desafío con valentía,
            confiando en la experiencia de los médicos y en la esperanza de una
            pronta recuperación.
          </p>
        </div>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Ultrasonido de tiroides.</h2>
        <img src={tiroides} />
        <p>
          CONCLUSIONES: EL ESTUDIO DEMUESTRA LA PRESENCIA DE DATOS COMPATIBLES
          CON SIALOADENITIS BILATERAL DE ETIOLOGIA A DETERMINAR CON PRESENCIA DE
          GANGLIOS INFLAMATORIOS REACTIVOS, TENIENDO LA ETIOLOGIA INFECCIOSA
          COMO CAUSA MAS PROBABLE A CORRELACIONAR CON EL ENTORNO CLINICO DEL
          PACIENTE GLÁNDULA TIROIDES SIN ALTERACIONES APARENTES. RESTO
          CONSERVADO.
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>PEDRO LUCAS FIDEL.</h2>
        <img src={monjita} />
        <p>
          INTERNADO EN EL HOSPITAL GENERAL DE TEZIUTLAN. JUEVES 14 DE DICIEMBRE
          DE 2023
        </p>
      </div>
    </div>
  );
}

export default App;
