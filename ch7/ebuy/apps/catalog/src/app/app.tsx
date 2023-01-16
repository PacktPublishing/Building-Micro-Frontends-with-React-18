// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import ProductList from './product-list';
import React from 'react';
const Recommendations = React.lazy(() => import('recommendations/Module'));

export function App() {
  return (
    <Container style={{ marginTop: '5rem' }}>
      <Text size="huge">Catalog App</Text>
      <ProductList />

      <Recommendations />
    </Container>
  );
}

export default App;
