import React from "react";
import styled from "styled-components/macro";

import { MEDIA_QUERY } from "../../constants";
import Icon from "../Icon";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SuperHeader from "../SuperHeader";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Nav>
          <NavLink href="/sale">À&nbsp;Vendre</NavLink>
          <NavLink href="/new">Nouvelle&nbsp;Versions</NavLink>
          <NavLink href="/men">Hommes</NavLink>
          <NavLink href="/women">Femmes</NavLink>
          <NavLink href="/kids">Les&nbsp;Enfents</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />
        <MobileActions>
          <ShoppingCartButton>
            <Icon id="shopping-bag" strokeWidth={2} />
            <VisuallyHidden>Open Shooping Cart</VisuallyHidden>
          </ShoppingCartButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
            <VisuallyHidden>Mobile menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  border-bottom: 1px solid var(--colors-gray-300);
  display: flex;
  align-items: baseline;
  overflow: auto;
  padding: 18px 32px;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    align-items: center;
    border-top: 4px solid var(--colors-gray-900);
    justify-content: space-between;
  }

  @media ${MEDIA_QUERY.PHONE_AND_SMALLER} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 7vw - 2.75rem, 3rem);
  margin: 0px 48px;


  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  flex: 1;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--colors-secondary);
  }
`;

const MobileActions = styled.nav`
  display: none;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    display: flex;
    gap: 32px;
  }

  @media ${MEDIA_QUERY.PHONE_AND_SMALLER} {
    gap: 16px;
  }
`;

const ShoppingCartButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

export default Header;
