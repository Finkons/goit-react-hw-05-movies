import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content:center;
`;

export const Link = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  padding-left: 15px;
  padding-right: 15px;
  &.active {
    color: 'blue';
    border-bottom: 3px solid 'blue';
  }
`;