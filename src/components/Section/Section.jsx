import React from 'react';
import { SectionWrapper, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
};

export default Section;
