import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper } from './ButtonWraper.styled';

const FeedbackOptions = ({ goodIncrement, NeutralIncrement, badIncrement }) => {
  return (
    <ButtonWrapper>
      <button type="button" onClick={goodIncrement}>
        Good
      </button>
      <button type="button" onClick={NeutralIncrement}>
        Neutral
      </button>
      <button type="button" onClick={badIncrement}>
        Bad
      </button>
    </ButtonWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodIncrement: PropTypes.func.isRequired,
  NeutralIncrement: PropTypes.func.isRequired,
  badIncrement: PropTypes.func.isRequired,
};
