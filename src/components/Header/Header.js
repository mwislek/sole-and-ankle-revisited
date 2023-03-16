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
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Filler />
        <MobileActions>
          <MobileActionButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </MobileActionButton>
          <MobileActionButton>
            <Icon id="search" strokeWidth={2} />
          </MobileActionButton>
          <MobileActionButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </MobileActionButton>
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
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${MEDIA_QUERY.LAPTOP_AND_SMALLER} {
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${MEDIA_QUERY.LAPTOP_AND_SMALLER} {
    display: none;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Filler = styled.div`
  flex: 1;

  @media ${MEDIA_QUERY.LAPTOP_AND_SMALLER} {
    display: none;
  }
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
`;

const MobileActions = styled.nav`
  display: none;

  @media ${MEDIA_QUERY.LAPTOP_AND_SMALLER} {
    display: flex;
    gap: 40px;
  }

  @media ${MEDIA_QUERY.PHONE_AND_SMALLER} {
    gap: 28px;
  }
`;

const MobileActionButton = styled(UnstyledButton)`
  display: none;

  @media ${MEDIA_QUERY.LAPTOP_AND_SMALLER} {
    display: revert;
  }
`;

export default Header;
