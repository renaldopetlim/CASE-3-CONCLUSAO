import Navbar from "./components/Navbar/Navbar";
import Conclusao from "./components/Conclusao/Conclusao";
import Painel from "./components/Painel/Painel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Conclusao></Conclusao>
      <main>
        <Painel></Painel>
      </main>
    </div>
  );
}

export default App;