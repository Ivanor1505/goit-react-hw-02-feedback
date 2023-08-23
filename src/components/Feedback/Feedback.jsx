import React, { Component } from 'react';
import { FeedbackBox } from "./Feedback.styled";


export class Feedback extends Component {
  render() {
    const { onFeedback } = this.props;

    return (
      <FeedbackBox>
        <h2>Please leave feedback</h2>
        <button onClick={()=>onFeedback("good")}>Good</button>
        <button onClick={()=>onFeedback("neutral")}>Neutral</button>
        <button onClick={()=>onFeedback("bad")}>Bad</button>
      </FeedbackBox>
                );}
};