import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
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
              <h2>BUDDHA RICE: Pure Kalanamak Rice from Kapilvastu</h2>
              <p>
              Buddha Rice is a rare, ancient and aromatic rice variety from the Land of Buddha: Kapilvastu (currently Siddharthnagar district, Uttar Pradesh, India) It is popularly known as Kalanamak Rice and has been in cultivation since the Buddhist period (600 BC)
            <br/>
            This rice variety has a unique black husk from which it derives its name. The rice grains are white and medium sized. Kalanamak rice outshines the basmati in all quality traits except grain length. The aroma of this variety is stronger than that of the basmati. Elongation after cooking, a trait considered most important in determining the quality of rice in international markets, is 40% greater than basmati. Cooked Kalanamak rice is softer and fluffier than other rice varieties.
            <br/>
            Kalanamak rice was given the Geographical Indication (GI) tag by Govt. of India in 2013 to mark its extremely limited geography of production. 
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>SUPERFOOD HEALTH BLENDS</h2>
              <p>
              Pali Farms' Superfood Health Blends are signature blends that are a mix of Superfoods (the most nutrient-dense foods known to mankind) and vitality enhancing Ayurvedic herbs (potent herbs from ancient Indian wisdom). These are available in flavors like Turmeric+Ginger, Moringa + Tulsi, Beetroot+ Cacao and since everything you need is already in the Health mixes, just blend with hot water or milk of your choice and enjoy the delicious drink full of health and happiness.
              <br/>
              Our Health blends are pure, organic, consciously sourced & highest quality ingredients. In fact, every ingredient in every blend has a health benefit. These blends are 100% plant-based, organic or non-GMO ingredients with zero added sugar.
              <br/>
              Our blends are rich in dietary fiber and anti oxidants, are anti carcinogenic, anti ageing that aid digestion and help in weight loss. These blends enhances your immunity, activates your metabolism while gently cleansing and nourishing you from inside.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>And much more...</h2>
              <p>
                We have a lot more organic grains and spices from the secret parts of India
                <br />
                <br />
                Get in touch with us!
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
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
  max-width: 380px;
  width: 100%;
`;

export default About;
