import "./App.css";
// mostrar cantidad de imagenes segun el numero ingresado
import { useState } from "react";
function App() {
  const [numero, setNumero] = useState(0);
  const [imagenes, setImagenes] = useState([]);

  const onChangeInput = (e) => {
    setNumero(e.target.value);
    if (e.target.value > 15) {
      setNumero(15);
    } else if (e.target.value < 0) {
      setNumero(0);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var arr = new Array(Number(numero)).fill(0);
    setImagenes(arr);
  };

  return (
    <div className="App">
      <input
        type="number"
        placeholder="Ingresa un número"
        onChange={(e) => onChangeInput(e)}
        value={numero}
      />
      <button onClick={(e) => onSubmit(e)}>Mostrar</button>
      <div className="container">
      {imagenes.map((img, index) => {
        return (
          <div key={index} className="img-container" style={{backgroundImage: `url("https://picsum.photos/id/${index}/200/200")`}}></div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
