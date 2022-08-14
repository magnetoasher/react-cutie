import React from 'react';
import styled from 'styled-components';
import remcalc from 'remcalc';
import Plx from 'react-plx';
import backCloud from '../assets/images/back-cloud.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin: ${remcalc(80)} 0 ${remcalc(80)};
  }

  .cutie-container {
    position: absolute;
  }

  img {
    width: 100%;
  }
`;

const UseCases = ({ children, start, end }) => {
  const AnimBackCloud = [
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 0,
          endValue: -30,
          property: 'translateY'
        }
      ]
    }
  ];

  const AnimCutie = [
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 0,
          endValue: 30,
          property: 'translateY'
        }
      ]
    }
  ];

  return (
    <Container>
      <Plx parallaxData={AnimBackCloud}>
        <img src={backCloud} />
      </Plx>
      <Plx className="cutie-container" parallaxData={AnimCutie}>
        {children}
      </Plx>
    </Container>
  );
};

export default UseCases;
