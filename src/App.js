import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import Form from './componets/Form';
import Footer from './componets/Footer';
import Hero from './componets/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
