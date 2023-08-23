import { FeedbackBox } from "./Feedback.styled";

export const Feedback = () => {
    return (
        <FeedbackBox><h2>Please leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistacs</h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p></FeedbackBox>
          );
};