import { Button, ContainerButton } from './FeedbackOptions.styled';

import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <ContainerButton>
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
    </ContainerButton>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
};
export default FeedbackOptions;
