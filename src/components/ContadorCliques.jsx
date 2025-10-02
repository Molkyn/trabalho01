// src/components/ContadorCliques.jsx
import { useState } from 'react'; // Passo 1: Importar o useState

function ContadorCliques() {
  // Passo 2: Criar a variável de estado 'contador'
  const [contador, setContador] = useState(0);

  // Passo 3: Criar a função que atualiza o estado
  function lidarComClique() {
    setContador(contador + 1); // Incrementa o contador
  }

  return (
    <div>
      {/* Passo 4: O botão chama a função ao ser clicado */}
      <button onClick={lidarComClique}>
        Você clicou {contador} vezes
      </button>
    </div>
  );
}

export default ContadorCliques;