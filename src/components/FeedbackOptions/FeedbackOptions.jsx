import React, { Component } from 'react';
import { ButtonWrapper } from './ButtonWraper';

class FeedbackOptions extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <ButtonWrapper>
        <button type="button" onClick={this.props.goodIncrement}>
          Good
        </button>
        <button type="button" onClick={this.props.NeutralIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.props.badIncrement}>
          Bad
        </button>
      </ButtonWrapper>
    );
  }
}

export default FeedbackOptions;
