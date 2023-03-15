import React from "react";
import styled from "styled-components/macro";

import { COLORS, MEDIA_QUERY, WEIGHTS } from "../../constants";
import Icon from "../Icon";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SuperHeader from "../SuperHeader";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <Nav>
          <MobileNavButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </MobileNavButton>
          <MobileNavButton>
            <Icon id="search" strokeWidth={2} />
          </MobileNavButton>
          <MobileNavButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </MobileNavButton>
        </Nav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${MEDIA_QUERY.LAPTOP_AND_LESS} {
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;

  @media ${MEDIA_QUERY.LAPTOP_AND_LESS} {
    gap: 40px;
  }

  @media ${MEDIA_QUERY.PHONE_AND_LESS} {
    gap: 28px;
  }
`;

const Side = styled.div`
  flex: 1;
  align-self: flex-start;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${MEDIA_QUERY.LAPTOP_AND_LESS} {
    display: none;
  }
`;

const MobileNavButton = styled(UnstyledButton)`
  display: none;

  @media ${MEDIA_QUERY.LAPTOP_AND_LESS} {
    display: revert;
  }
`;

export default Header;
