import React from "react";
import styled from "styled-components/macro";

import { MEDIA_QUERY, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

function ViewBreadcrumbs() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
}

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TitleContainer>
            <MobileBreadcrumbs>
              <ViewBreadcrumbs />
            </MobileBreadcrumbs>
            <Title>Running</Title>
          </TitleContainer>
          <SortContainer>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </SortContainer>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <DesktopBreadcrumbs>
          <ViewBreadcrumbs />
        </DesktopBreadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    align-items: flex-end;
  }
`;

const DesktopBreadcrumbs = styled.div`
  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    display: none;
  }
`;
const MobileBreadcrumbs = styled.div`
  display: none;

  @media ${MEDIA_QUERY.TABLET_AND_SMALLER} {
    display: revert;
  }
`;

const SortContainer = styled.div`
  @media ${MEDIA_QUERY.PHONE_AND_SMALLER} {
    display: none;
  }
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
