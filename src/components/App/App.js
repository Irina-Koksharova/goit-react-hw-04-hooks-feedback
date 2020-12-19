import { useState } from 'react';
import Container from '../Container';
import Section from '../Section';
import FeedbackOptions from '../FeedbackForm';
import Notification from '../Notification';
import Statistics from '../Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
    e.target.style.backgroundColor = '#d3d1d1';
    setTimeout(() => {
      e.target.style.backgroundColor = '#efefef';
    }, 100);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? `${Math.round((good / countTotalFeedback()) * 100)}%`
      : `${countTotalFeedback()}%`;
  };

  return (
    <Container>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}

export default App;
