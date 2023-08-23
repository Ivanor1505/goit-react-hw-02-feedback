import React, { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
    handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
    };

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    };
    
    countPositiveFeedbackPercent = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };
    
    render(){
      return (
    <div>
          <Feedback onFeedback={this.handleFeedback} />
        <Statistics feedbackQuantity = {this.state}/>
    </div>
    )
  };
};
