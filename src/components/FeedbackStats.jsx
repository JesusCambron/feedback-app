import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const BAD_AVERAGE = 7;
const GOOD_AVERAGE = 9;
const EXCELLENT_AVERAGE = 10;
const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext);
  let average =
    feedbacks.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedbacks.length;

  const getFaceCalification = (average) => {
    if (average <= BAD_AVERAGE) return "🙁";
    if (average <= GOOD_AVERAGE) return "🙂";
    if (average <= EXCELLENT_AVERAGE) return "😎";
  };

  const formatAverage = (average) => (average ? average.toFixed(1) : "0");

  return (
    <section className="container stats">
      <h2 className="ta-center">Stats</h2>
      <p className="ta-end">{feedbacks.length} Reviews</p>
      <p className="ta-end">
        Average Rating: {formatAverage(average)} {getFaceCalification(average)}
      </p>
    </section>
  );
};

export default FeedbackStats;
