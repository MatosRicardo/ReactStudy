import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
        {/* CHAMANDO E UTILIZANDO PROPS de outro item
              <CoreConcept
                image={CORE_CONCEPTS[0].image}
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
              />
              Outra Maneira de fazer isso e deixa mais legivel
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept
                image={CORE_CONCEPTS[3].image}
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
              /> */}
      </ul>
    </section>
  );
}
