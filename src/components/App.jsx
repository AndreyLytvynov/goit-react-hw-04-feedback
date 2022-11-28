import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import React, { useState } from 'react';
import Notification from './Statistics/Notification';
import Section from './Section/Section';

const App = () => {
  const [goodValue, setGoodValue] = useState(0);
  const [badValue, setBadValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);

  return (
    <>
      <Section title={'Please live feedback'}>
        <FeedbackOptions
          badIncrement={() => {
            setBadValue(prevState => prevState + 1);
          }}
          goodIncrement={() => {
            setGoodValue(prevState => prevState + 1);
          }}
          NeutralIncrement={() => {
            setNeutralValue(prevState => prevState + 1);
          }}
        />
      </Section>

      <Section title={'Statistics'}>
        {goodValue > 0 || badValue > 0 || neutralValue > 0 ? (
          <Statistics bad={badValue} good={goodValue} neutral={neutralValue} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
