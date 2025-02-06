import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "O bloco fundamental da interface de usuário - compõe a interface de usuário combinando múltiplos componentes.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Retorna (potencialmente dinâmico) código HTML (ou algo similar) para definir a marcação real que será renderizada.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Torna os componentes configuráveis (e, portanto, reutilizáveis) ao passar dados de entrada para eles.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "Dados gerenciados pelo React que, quando alterados, causam a re-renderização do componente e a atualização da interface de usuário.",
  },
];
