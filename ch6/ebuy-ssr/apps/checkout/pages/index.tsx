import { Container, Header as Text } from "semantic-ui-react";
import ShoppingBasket from "../components/Basket";
import "semantic-ui-css/semantic.min.css";

import { PRODUCT_LIST_MOCKS } from "../mocks/product-list-mocks";

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
  return (
    <Container style={{ marginTop: "5rem" }}>
      <Text size="huge">Checkout</Text>
      <ShoppingBasket basketList={PRODUCT_LIST_MOCKS} />
    </Container>
  );
}

export default App;
