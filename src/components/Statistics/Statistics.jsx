import React, { Component } from 'react';

class Statistics extends Component {
  static defaultProps = {};
  static propTypes = {};

  render() {
    const { good, neutral, bad } = this.props;
    const total = good + neutral + bad;

    return (
      <>
        <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Positive feedback: {Math.floor((good / total) * 100)}% </p>
      </>
    );
  }
}

export default Statistics;
