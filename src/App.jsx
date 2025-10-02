// src/App.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import ListaAlunos from './components/ListaAlunos';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Boas-vindas, Mário!</h2> {/* Mensagem de boas-vindas com seu nome */}
        <p>Esta é a sua aplicação de lista de tarefas.</p>
        <ListaAlunos />
      </main>
      <Footer />
    </div>
  );
}

export default App;