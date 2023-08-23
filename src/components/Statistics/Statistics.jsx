import React, { Component } from 'react';
import { StatisticsBox } from "./Statistics. styled";

export class Statistics extends Component{
    render() {
        const { feedbackQuantity } = this.props;

        return (
            <StatisticsBox>
            <h2>Statistacs</h2>
            <p>Good: {feedbackQuantity.good}</p>
            <p>Neutral: {feedbackQuantity.neutral}</p>
            <p>Bad: {feedbackQuantity.bad}</p>
            </StatisticsBox> 
                );
            }
}