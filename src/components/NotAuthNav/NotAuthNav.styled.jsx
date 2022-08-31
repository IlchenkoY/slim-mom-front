import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../assets/sizes';

export const Thumb = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoints.desktop} {
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

export const NavThumb = styled.div`
  /* padding: 0 20px; */
  /* align-items: center; */

  /* gap: 16px; */
  color: var(--secondary-text-color);
  text-transform: uppercase;

  @media ${breakpoints.desktop} {
    /* justify-content: flex-start;
    align-items: flex-end; */
    /* margin-left: 20px; */
    /* border-left: 1px solid grey; */
    /* padding: 10px 20px;
    padding-bottom: -20px; */
    /* &::before {
      content: '';
      width: 32px;
      height: 1px;
      background-color: grey;
      transform: rotate(90deg);
      align-items: flex-end;
    } */
  }
`;

export const NavLinkStyled = styled(NavLink)`
  /* margin-left: 20px; */

  &.active {
    color: var(--main-text-color);
  }
`;
