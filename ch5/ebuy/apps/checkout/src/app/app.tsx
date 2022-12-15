// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Container, Header as Text } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ShoppingBasket from './basket';

import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
import { getSessionStorage } from '@ebuy/utils';

// const getTotalBasketCount = (basket: any): any => {
//   return Object.values(basket).reduce((a: any, b: any) => a + b, 0);
// };

const createCompleteBasket = (allItems: any, quantities: any) => {
  return allItems
    .filter((item: any) => quantities[item.id])
    .map((item: any) => {
      return {
        ...item,
        quantity: quantities[item.id],
      };
    });
};

export function App() {
  // const basketFromStorage: any = JSON.parse(
  //   window.sessionStorage.getItem('shoppingBasket') || '{}'
  // );

  const basketFromStorage: any = getSessionStorage('shoppingBasket');

  const completeBasket = createCompleteBasket(
    PRODUCT_LIST_MOCKS,
    basketFromStorage
  );

  return (
    <Container style={{ marginTop: '5rem' }}>
      <Text size="huge">Checkout</Text>
      <ShoppingBasket basketList={completeBasket} />
    </Container>
  );
}

export default App;
