import React from 'react';
import styled from 'styled-components';
import mockup from '@images/art/mockup.png'
import pattern from '@images/art/pattern.png'
import logo from '@images/art/logo.svg'
import button from '@images/art/button.svg'

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';



const Header = () => (

      <HeaderWrapper>
        <Container>
          <Grid>
            <ImageDiv>
            <Image src={mockup} />
            </ImageDiv>
          
            <TextDiv>
             <Logo src={logo}></Logo>
             <br />
              a community for creators to sell their work and build a fanbase
              <br />
              <StyledExternalLink href="https://docs.google.com/forms/d/e/1FAIpQLSd0cieqa8Dih3GQfRmby1h56VNrXfOJUy6WbLzzPqGvnu1yOw/viewform?usp=sf_link">
                  <img src={button} alt="Survey Button"/>
                </StyledExternalLink>
            </TextDiv>
          </Grid>
        </Container>
      </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-image: url(${pattern});
  background-size: cover;
  padding: 96px 0;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;


const Image = styled.img`
  height: 80vh;
`;

const Logo = styled.img`
  
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 80%;
  }
  
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: vertical;
  align-items: center;
  justify-content: center;
`;

const TextDiv = styled.div`
  font-weight: 800;
  font-size: 48px;
  color: #566473;
  @media (max-width: ${props => props.theme.screen.md}) {
    font-size: 42px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${ImageDiv} {
      order: 2;
    }
  }
`;

const StyledExternalLink = styled(ExternalLink)`

  line-height: 2.5;

`;

export default Header;
