import React, { useContext } from "react";
import { FeedbackItem } from "./FeedbackItem";
import { FeedbackContext } from "../context/FeedbackContext";
import Loading from "./shared/Loading";

const FeedbackList = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext);
  return (
    <section className="container feedback-list">
      {!feedbacks.length ? (
        <h2 className="white-color">Not Feedback Yet 👀</h2>
      ) : isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        feedbacks.map((feedback) => (
          <FeedbackItem key={feedback.id} feedback={feedback} />
        ))
      )}
    </section>
  );
};

export default FeedbackList;
