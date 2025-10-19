// PascalCase no nome da função/ componente
import { Heading } from "./components/Heading/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

function App() {
  return (
    <>
      <Heading>
        Olá meu fi
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto
        assumenda veritatis beatae dolorem. Iure unde tenetur harum modi
        corporis eaque earum dignissimos. Odio reprehenderit provident, officiis
        cupiditate ratione est?
      </p>
    </>
  );
}

export { App };
