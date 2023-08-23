import React, { Component } from 'react';
import { StatisticsBox } from "./Statistics. styled";
import { Notification } from 'components/Notification/Notification';

export class Statistics extends Component{
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (total?
            <StatisticsBox>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
            </StatisticsBox> :
            <Notification message="There is no feedback" />
                );
            }
}