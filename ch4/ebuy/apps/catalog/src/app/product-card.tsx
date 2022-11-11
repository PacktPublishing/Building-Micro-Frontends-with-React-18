import { useSessionStorage } from '@ebuy/custom-hooks';
import { Button, Card, Image } from 'semantic-ui-react';

export function ProductCard(productData: any) {
  const { product } = productData;
  const [basket, setBasket]: any = useSessionStorage('shoppingBasket', {});

  const addItem = (id: string) => {
    basket[id] = basket[id] ? basket[id] + 1 : 1;
    setBasket(basket);
  };

  const removeItem = (id: string) => {
    basket[id] = basket[id] <= 1 ? 0 : basket[id] - 1;

    setBasket(basket);
  };
  return (
    <Card>
      <Card.Content>
        <Image src={product.image} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Description>{product.description}</Card.Description>
        <Card.Header>${product.price}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
          <Button basic color="red" onClick={() => removeItem(product.id)}>
            Remove
          </Button>
          <Button basic color="blue">
            {basket[product.id] || 0}
          </Button>
          <Button basic color="green" onClick={() => addItem(product.id)}>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ProductCard;
