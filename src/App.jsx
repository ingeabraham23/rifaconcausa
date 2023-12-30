// eslint-disable-next-line no-unused-vars
import React from "react";
import monjita from "./assets/monjita.jpg";
import bateria from "./assets/bateria.png";
import licuadora from "./assets/licuadora.png";
import plancha from "./assets/plancha.png";
import cobertor from "./assets/cobertor.jpg";
import tiroides from "./assets/tiroides.jpg";
import monjitaayotoxco from "./assets/monjita-ayotoxco.jpg";
import egresohospital from "./assets/egreso-hospital.jpg";
import recetaayotoxco from "./assets/recetaayotoxco.jpg";
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
        <p>Batería De Cocina 8 Piezas Madrid Óptima Verde Cinsa.</p>
        <p>
          <a
            href="https://www.mitienda.cinsa.com.mx/MLM-796819265-bateria-de-cocina-8-piezas-madrid-optima-verde-cinsa-_JM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detalles en tienda oficial.
          </a>
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Segundo premio.</h2>
        <img src={licuadora} />
        <p>
          Licuadora Oster Osterizer 869-16G 1.25 L almendra con vaso de plástico
          127V.
        </p>
        <p>
          <a
            href="https://www.mercadolibre.com.mx/licuadora-oster-osterizer-869-16g-125-l-almendra-con-vaso-de-plastico-127v/p/MLM17829087"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detalles en Mercado libre.
          </a>
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Tercer premio.</h2>
        <img src={plancha} />
        <p>Plancha De Vapor Y Rocio Black And Decker Color Blanco/Azul</p>
        <p>
          <a
            href="https://www.mercadolibre.com.mx/plancha-de-vapor-y-rocio-black-and-decker-irbd100-color-blancoazul/p/MLM8060631?pdp_filters=category:MLM10115#searchVariation=MLM8060631&position=7&search_layout=stack&type=product&tracking_id=aa46ebed-c60f-4852-8323-b76844046947"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detalles en Mercado libre.
          </a>
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>Cuarto y quinto premio.</h2>
        <img src={cobertor} />
        <p>Cobertor providencia.</p>
        <p>
          <a
            href="https://proviamiga.com/edredon-micrograbado-matrimonial-luxor.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Detalles en Tienda oficial.
          </a>
        </p>
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
          Si una persona resulta ganadora, quedaran descartados todos los
          boletos que esten a su nombre, es decir que ya no podra ganar una
          segunda vez, en caso de que un boleto a su nombre saliera ganador se procedera a sacar otro boleto.
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
            de tratamiento. El miercoles 13 de diciembre de 2023, el paciente
            fue ingresado al Hospital General de Teziutlán. Actualmente, se
            encuentra bajo cuidado médico continuo mientras los profesionales de
            la salud trabajan diligentemente para identificar la causa
            subyacente de la sialoadenitis bilateral y brindar el tratamiento
            más efectivo.
          </p>
          <p>
            Después de ser dado de alta del Hospital General de Teziutlán el
            martes 19 de diciembre de 2023, lamentablemente, el paciente no
            experimentó ninguna mejora; de hecho, sus síntomas empeoraron
            considerablemente, con una inflamación más pronunciada. Ante esta
            situación, el miércoles 20 de diciembre de 2023, la familia decidió
            llevarlo a consulta con otro médico en Ayotoxco de Gro. Pue.
          </p>
          <p>
            En esta nueva fase de tratamiento, el paciente está acudiendo
            diariamente a que un médico especializado en acupuntura lo trate. El
            enfoque de este tratamiento es ayudar a liberar el líquido que se ha
            acumulado, agravando la condición de sialoadenitis bilateral. La
            situación ha llegado al punto en el que el paciente ya no puede
            caminar, lo que agrega un nivel adicional de complejidad y desafío a
            su situación.
          </p>
          <p>
            La familia continúa enfrentando estos desafíos con valentía,
            confiando en la experiencia del nuevo médico y en la esperanza de
            que este enfoque de tratamiento pueda brindar la tan necesaria
            mejoría. En este difícil momento, el apoyo emocional y financiero de
            la comunidad es más crucial que nunca. La rifa organizada sigue
            siendo una herramienta fundamental para recaudar fondos y ayudar a
            cubrir los crecientes costos médicos y las necesidades diarias del
            paciente y su familia.
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
        <h2 style={{ textAlign: "center" }}>INGRESO URGENCIAS.</h2>
        <img src={monjita} />
        <p>
          INTERNADO EN EL HOSPITAL GENERAL DE TEZIUTLAN. JUEVES 14 DE DICIEMBRE
          DE 2023
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>EGRESO URGENCIAS.</h2>
        <img src={egresohospital} />
        <p>
          EGRESO DEL HOSPITAL GENERAL DE TEZIUTLAN. MARTES 19 DE DICIEMBRE DE
          2023
        </p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>ACUPUNTURA.</h2>
        <img src={monjitaayotoxco} />
        <p>CONSULTA EN AYOTOXCO MIERCOLES 20 DE DICIEMBRE DE 2023</p>
      </div>
      <div className="contenedor-premio">
        <h2 style={{ textAlign: "center" }}>RECETA.</h2>
        <img src={recetaayotoxco} />
        <p>RECETA MEDICO NATURISTA</p>
      </div>
    </div>
  );
}

export default App;
