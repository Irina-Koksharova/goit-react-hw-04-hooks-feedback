import { useState, useEffect } from 'react';
import Container from '../Container/Container';
import Section from '../../components/Section/Section';
import FeedbackOptions from '../../components/FeedbackForm/FeedbackOptions';
import Notification from '../../components/Notification/Notification';
import Statistics from '../../components/Statistics/Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = good + neutral + bad;
    setTotal(total);
  }, [bad, good, neutral]);

  const handleIncrement = e => {
    const targetButton = e.target;
    targetButton.style.backgroundColor = 'rgb(126, 179, 247)';
    setTimeout(() => {
      targetButton.style.backgroundColor = 'rgb(239, 239, 239)';
    }, 100);

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
  };

  const countPositiveFeedbackPercentage = () => {
    return total ? `${Math.round((good / total) * 100)}%` : `${total}%`;
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
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
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
