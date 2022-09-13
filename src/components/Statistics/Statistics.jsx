import { Box } from './Statistics.styled';
const Statictics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive Percentage:{positivePercentage}%</p>
    </Box>
  );
};

export default Statictics;
