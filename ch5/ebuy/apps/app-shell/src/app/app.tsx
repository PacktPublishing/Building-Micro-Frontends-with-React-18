import React from 'react';
import { Header } from '@ebuy/ui';
import { Container, Button } from 'semantic-ui-react';
import { Route, Routes } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import useStore from 'store/Module';

const Catalog = React.lazy(() => import('catalog/Module'));
const Checkout = React.lazy(() => import('checkout/Module'));

export function App() {
  const { count, increment } = useStore();
  return (
    <React.Suspense fallback={null}>
      <Container style={{ marginTop: '5rem' }}>
        <Header />
        <Button onClick={increment}>{count} Likes </Button>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </React.Suspense>
  );
}

export default App;
