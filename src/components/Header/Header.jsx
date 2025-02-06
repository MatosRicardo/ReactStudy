import reactImg from "../../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import "./Header.css";

// Criando itens dinamicos
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  // const description = reactDescriptions[genRandomInt(2)]; Chamar a const diretamente no JSX
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
