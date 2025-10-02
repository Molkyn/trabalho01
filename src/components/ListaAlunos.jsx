// src/components/ListaAlunos.jsx

function ListaAlunos() {
  const alunos = ['Mário', 'Isac', 'Bianka', 'Danilo', 'Eduarda'];

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>{aluno}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlunos;