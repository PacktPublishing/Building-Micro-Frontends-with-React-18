// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '@ebuy/ui';
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ProductList from './product-list';
export function App() {
  return (
    <Container style={{ marginTop: '5rem' }}>
      <Header />
      <Text size="huge">Catalog App</Text>
      <ProductList />
    </Container>
  );
}

export default App;
