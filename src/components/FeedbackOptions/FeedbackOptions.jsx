import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          onLeaveFeedback(keys[0]);
        }}
      >
        Good
      </Button>
      <Button
        type="button"
        onClick={() => {
          onLeaveFeedback(keys[1]);
        }}
      >
        Neutral
      </Button>
      <Button
        type="button"
        onClick={() => {
          onLeaveFeedback(keys[2]);
        }}
      >
        Bad
      </Button>
    </div>
  );
};
export default FeedbackOptions;
