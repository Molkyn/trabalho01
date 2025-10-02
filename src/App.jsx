// src/App.jsx

import Header from './components/Header';
import Footer from './components/Footer';
import ContadorCliques from './components/ContadorCliques';
import BotoesAcao from './components/BotoesAcao';
import ListaCards from './components/ListaCards';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h2>Boas-vindas, Mário!</h2>
        <hr />
        <ContadorCliques />
        <hr />
        <BotoesAcao />
        <hr />
        <ListaCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;