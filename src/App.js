import "./styles.css";
import DisplayQuote from "./DisplayQuote";
import axios from "axios";
import { useState } from "react";

const dummyQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
};

export default function App() {
  const [quote, setQuote] = useState(dummyQuote);

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => setQuote(data[0]))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <p>
        <button type="button" onClick={getQuote}>
          <h3>Hit me!</h3>
        </button>
      </p>
      <DisplayQuote
        image={quote.image}
        quote={quote.quote}
        character={quote.character}
      />
    </div>
  );
}
