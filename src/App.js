import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
