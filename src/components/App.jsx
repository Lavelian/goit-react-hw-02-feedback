import { Component } from 'react';
import Section from './Section/';
import Container from './Container/Container.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  upValue = nameValue => {
    this.setState(prevState => ({
      [nameValue]: prevState[nameValue] + 1,
    }));
  };

  render() {
    const { state } = this;

    return (
      <Container>
        <Section
          title="Please leave feedback"
          onLeaveFeedback={this.upValue}
          options={state}
        />
      </Container>
    );
  }
}
