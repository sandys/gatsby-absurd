import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'Where is the rice sourced from ?',
    content: () => (
      <>
        We source verified, organic Kala Namak from small farms in Eastern Uttar Pradesh.
      </>
    ),
  },
  {
    title: 'Is Buddha Rice black in color?',
    content: () => (
      <>
        Buddha Rice, popularly known as Kalanamak Rice, is white in color. The rice paddy is black in color. After milling, the rice thus produced is white.
      </>
    ),
  },
  {
    title: 'Why is Kalanamak Rice called the Lost grain of India?',
    content: () => (
      <>
       Kalanamak Rice was very popular since the Buddhist era (600BC). It was considered one of the most prestigious rice varieties of the country. 
      Kalanamak was so coveted by the British East India Company, that they captured the land around Kapilvastu, and established Birdpur and Alidapur states for Kalanamak production. They transported the Kalanamak rice to England from Uska-bazar mandi via Dhaka, Bangladesh. 
      After independence, Uska-bazar mandi became nonfunctional due to negligence. Low productivity, no research and development, non availability of quality seeds, long duration of harvest (6 months) has led to a fall in production of Kalanamak and it has became the famous lost rice of India.

      </>
    ),
  },
  {
    title: 'Is the aroma of Kalanamak Rice the gift of Lord Buddha?',
    content: () => (
      <>
      Kalanamak’s cultivation dates back to 600 BC and grains similar to Kalanamak have been excavated at Aligarhwa, Siddhartnagar(1971-76) - identified as the territory of Buddha's father, king Shuddodhan.
Fa-hsein, a Chinese monk who travelled to India during 5th Century BC, notes in his famous travelogues that Lord Buddha blessed the villagers of Kapilvastu with grains of Kalanamak, asking them to sow it in a marshy place. “The rice will have typical aroma which will always remind people of me," he said. This rice variety, if sown elsewhere, loses its aroma and quality.

      </>
    ),
  },
  {
    title: 'What is Geographical Indication (G.I.) tag? ',
    content: () => (
      <>
      Geographical Indications of Goods are defined as that aspect of industrial property which refer to the geographical indication referring to a country or to a place situated therein as being the country or place of origin of that product. Typically, such a name conveys an assurance of quality and distinctiveness which is essentially attributable to the fact of its origin in that defined geographical locality, region or country.

      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
