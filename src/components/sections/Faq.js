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
    title: 'How do we process the rice?',
    content: () => (
      <>
        We clean and process the rice in certified, food-safe processing centers in India
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
