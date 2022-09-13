import FeedbackOptions from 'components/FeedbackOptions';
import Statictics from 'components/Statistics';
import Notification from 'components/Notification';
import { Title } from './Title.styled';

const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
const countPositiveFeedbackPercentage = ({ good, bad }) => {
  return (good / (good + bad)) * 100 || 0;
};
const Section = ({ title, onLeaveFeedback, options }) => (
  <>
    <Title>{title}</Title>

    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    {options.good || options.neutral || options.bad > 0 ? (
      <Statictics
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        total={countTotalFeedback(options)}
        positivePercentage={countPositiveFeedbackPercentage(options).toFixed(2)}
      />
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

export default Section;
