import './App.css';
import { useState, useEffect } from 'react';
import FunctionSimples from './components/exemplos/FunctionSimples.jsx';
import FunctionDupla from './components/exemplos/FunctionDupla.jsx';
import Botao from './components/button/Botao.jsx';

function App() {
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    console.log("useEffect chamado")
    setUseEffectCounter(useEffectCounter + 1);
  }, [logado])

  const Logar = () => {
    setLogado(true);
  }

  const Deslogar = () => {
    setLogado(false);
  }
  return (
    <div className="App">
      <FunctionSimples></FunctionSimples>
      <FunctionDupla></FunctionDupla>
      <h1>Use effect foi chamado {useEffectCounter} vezes</h1>
      {
        logado ? <p> Logado </p> : <p>Deslogado</p>
      }
      <Botao tarefa={Logar} classe="botao blue">Logar</Botao>
      <Botao tarefa={Deslogar} classe="botao red">Deslogar</Botao>
      <hr />
      <button onClick={Logar}>Logar</button>
      <button onClick={Deslogar}>Deslogar</button>
    </div>
  );
}

export default App;