// PascalCase no nome da função/ componente

import "./styles/theme.css";
import "./styles/global.css";
import Container from "./components/Container/Container";
import { Heading } from "./components/Heading/Heading";

function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}

export { App };
