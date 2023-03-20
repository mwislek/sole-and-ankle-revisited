/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <MenuButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>Close Mobile Menu</VisuallyHidden>
        </MenuButton>
        <Spacer />
        <Navigation>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Navigation>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;

  background-color: var(--color-overlay);
`

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  background: white;
  height: 100%;
  margin: 0%;
  padding: 32px;
  width: 300px;
`

const MenuButton = styled(UnstyledButton)`
  position: fixed;
  top: 10px;
  right: 0;
  padding: 16px;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & a {
    color: var(--color-gray-900);
    font-size: ${18 / 16}rem;
    font-weight: var(--weight-medium);
    text-decoration: none;
    text-transform: uppercase;
  }

  & a:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;

  & a{
    color: var(--color-gray-700);
    font-size: ${14 / 16}rem;
    line-height: ${28 / 16}rem;
    text-decoration: none;
  }
`

const Spacer = styled.div`
  flex: 1;
`
export default MobileMenu;
