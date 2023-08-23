import React, { Component } from 'react';
import { StatisticsBox } from "./Statistics. styled";

export class Statistics extends Component{
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <StatisticsBox>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
            </StatisticsBox> 
                );
            }
}