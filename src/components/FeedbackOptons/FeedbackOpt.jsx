import React, { Component } from 'react';
import { FeedbackBox } from "./FeedbackOpt.styled";


export class Feedback extends Component {
  render() {
    const { onFeedback } = this.props;

    return (
      <FeedbackBox>
        <button onClick={()=>onFeedback("good")}>Good</button>
        <button onClick={()=>onFeedback("neutral")}>Neutral</button>
        <button onClick={()=>onFeedback("bad")}>Bad</button>
      </FeedbackBox>
                );}
};