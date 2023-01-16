import { Card } from "semantic-ui-react";
import ProductCard from "../components/ProductCard";
import { PRODUCT_LIST_MOCKS } from "../mocks/product-list-mocks";

export function ProductList() {
  return (
    <>
      <Card.Group>
        {PRODUCT_LIST_MOCKS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Card.Group>
      <p>asdfghjklkjhgfh</p>
    </>
  );
}

export default ProductList;
