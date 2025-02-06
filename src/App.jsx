import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx"; //Importanto componente externo
import CoreConcept from "./components/CoreConcept.jsx"; //Importanto props

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* CHAMANDO E UTILIZANDO PROPS de outro item*/}
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            {/* Outra Maneira de fazer isso e deixa mais legivel */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Exemplos</h2>
          <menu>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
