import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        activity: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "activity" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        subscribe: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "subscribe" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        feed: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "feed" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Build your network</h2>
              <p>
                Work with other creators and your fans to build your network. All public posts can be shared on a curated fan page, or on another creators page.
              </p>
            </div>
            <Art>
              <Img fluid={data.activity.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.subscribe.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Create custom subscriptions</h2>
              <p>
                Fans can subscribe to custom feeds of your work that you can curate based on tiered pricing. You set the pricing, post your content, and earn from your work.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Boost your favorite creators</h2>
              <p>
               As a fan you can center your blog around promoting your favorite creators. Your blog is your curated gallery for all of the content you love and want to share.
              </p>
            </div>
            <Art>
              <Img fluid={data.feed.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 300px;
  width: 100%;
`;

export default About;
