import { Menu, Container, Icon, Label } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import { getSessionStorage } from '@ebuy/utils';
import { Link } from 'react-router-dom';

const getTotalBasketCount = (basket: any): any => {
  return Object.values(basket).reduce((a: any, b: any) => a + b, 0);
};

export function Header() {
  const [miniBasketCount, setMiniBasketCount] = useState(null);

  useEffect(() => {
    const basket: any = getSessionStorage('shoppingBasket');
    const totalCount: any = getTotalBasketCount(basket);
    setMiniBasketCount(totalCount);
  }, []);
  useEventListener('session-storage', () => {
    const basket: any = getSessionStorage('shoppingBasket');
    const totalCount: any = getTotalBasketCount(basket);
    setMiniBasketCount(totalCount);
  });
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          eBuy.com
        </Menu.Item>
        <MenuItems />
        <Menu.Item position="right">
          <Label>
            <Icon name="shopping cart" />
            {miniBasketCount}
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
const MenuItems = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <Menu.Item key={index}>
          <Link to={navItem.href ?? '#'}>{navItem.label}</Link>
        </Menu.Item>
      ))}
    </>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Catalog',
    href: '/',
  },
  {
    label: 'Checkout',
    href: '/checkout',
  },
];
export default Header;
