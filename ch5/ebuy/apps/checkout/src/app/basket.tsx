import { Table, Image, Container } from 'semantic-ui-react';

export function ShoppingBasket(basketListData: any) {
  const { basketList } = basketListData;
  return (
    <Container textAlign="center">
      <Table basic="very" rowed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Items</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {basketList.map((basketItem: any) => (
            <Table.Row>
              <Table.Cell>
                <Image src={basketItem.image} rounded size="mini" />
              </Table.Cell>
              <Table.Cell> {basketItem.title}</Table.Cell>
              <Table.Cell>{basketItem.quantity || 0}</Table.Cell>

              <Table.Cell>£{basketItem.price * basketItem.quantity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default ShoppingBasket;
