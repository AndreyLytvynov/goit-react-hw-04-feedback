import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import React, { Component } from 'react';
import Notification from './Statistics/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    goodValue: 0,
    badValue: 0,
    neutralValue: 0,
  };

  badIncrement = () => {
    this.setState(prevState => {
      return {
        badValue: prevState.badValue + 1,
      };
    });
  };
  goodIncrement = () => {
    this.setState(prevState => {
      return {
        goodValue: prevState.goodValue + 1,
      };
    });
  };
  neutralIncrement = () => {
    this.setState(prevState => {
      return {
        neutralValue: prevState.neutralValue + 1,
      };
    });
  };

  render() {
    return (
      <>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            badIncrement={this.badIncrement}
            goodIncrement={this.goodIncrement}
            NeutralIncrement={this.neutralIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.state.goodValue > 0 ||
          this.state.badValue > 0 ||
          this.state.neutralValue > 0 ? (
            <Statistics
              bad={this.state.badValue}
              good={this.state.goodValue}
              neutral={this.state.neutralValue}
              total={this.state.totalValue}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
