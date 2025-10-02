// src/components/ListaCards.jsx
import Card from './Card'; // Importamos nosso componente reutilizável

function ListaCards() {
  // Uma lista de tarefas como um array de objetos
  const tarefas = [
    { id: 1, titulo: 'Estudar React', descricao: 'Aprender sobre state e props.' },
    { id: 2, titulo: 'Fazer o Trabalho', descricao: 'Versionar o código com Git.' },
    { id: 3, titulo: 'Entregar o Projeto', descricao: 'Enviar o link do GitHub.' },
  ];

  return (
    <div>
      <h3>Minhas Tarefas</h3>
      <div style={{ display: 'flex' }}>
        {tarefas.map(tarefa => (
          <Card
            key={tarefa.id}
            titulo={tarefa.titulo}
            descricao={tarefa.descricao}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCards;