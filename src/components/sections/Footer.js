import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';


const Footer = () => (

      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
          <Copyright>
          Copyright 2020 | Blur Social | Stockton, California USA and Bengaluru, India
          </Copyright>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
);



const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.white.dark};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.xsmall};
  color: #566473;
  font-weight: 300;

  a {
    text-decoration: none;
    color: inherit;
  }
`;


const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
