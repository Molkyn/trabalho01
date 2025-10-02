// src/components/Card.jsx

// O componente recebe 'props' como um argumento
function Card(props) {
  const estiloCard = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '8px',
    width: '200px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  return (
    <div style={estiloCard}>
      {/* Usamos os dados recebidos via props */}
      <h4>{props.titulo}</h4>
      <p>{props.descricao}</p>
    </div>
  );
}

export default Card;