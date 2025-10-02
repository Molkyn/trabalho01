// src/components/BotoesAcao.jsx
import { useState } from 'react';

function BotoesAcao() {
  const [tipoAlerta, setTipoAlerta] = useState(null); // 'sucesso', 'erro' ou null

  // Estilos para os alertas (CSS dentro do JavaScript)
  const estiloAlerta = {
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0',
    color: 'white',
  };

  const estiloSucesso = { ...estiloAlerta, backgroundColor: 'green' };
  const estiloErro = { ...estiloAlerta, backgroundColor: 'red' };

  return (
    <div>
      <h3>Botões de Ações</h3>
      <button onClick={() => setTipoAlerta('sucesso')}>Mostrar Alerta Verde</button>
      <button onClick={() => setTipoAlerta('erro')}>Mostrar Alerta Vermelho</button>
      <button onClick={() => setTipoAlerta(null)}>Limpar Alerta</button>

      {/* Renderização Condicional: O alerta só aparece se 'tipoAlerta' não for null */}
      {tipoAlerta === 'sucesso' && (
        <div style={estiloSucesso}>
          Este é um alerta de sucesso!
        </div>
      )}

      {tipoAlerta === 'erro' && (
        <div style={estiloErro}>
          Este é um alerta de erro!
        </div>
      )}
    </div>
  );
}

export default BotoesAcao;