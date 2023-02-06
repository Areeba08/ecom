import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SingleProduct } from './components/SingleProduct';
import { Header } from './components/Header';
import AppContext from './utils/context';
import { Category } from './components/Category';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
