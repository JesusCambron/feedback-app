import React, { createContext, useEffect, useState } from "react";
/* import FeedbackData from "../data/feedbackData.json"; */

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedbacks?_sort=id&_order=desc`);
    /* const response = await fetch(
      `http://localhost:5000/feedbacks?_sort=id&order=desc`
    ); */
    const data = await response.json();
    setFeedbacks(data);
    setIsLoading(false);
    /* setFeedbacks([]); */
  };

  const editFeedback = (id) => {
    let feedback = feedbacks.find((feedback) => id === feedback.id);
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedbacks([data, ...feedbacks]);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`/feedbacks/${id}`, { method: "DELETE" });
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const updateFeedback = async (id, newFeedback) => {
    const response = await fetch(`/feedbacks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, ...newFeedback } : feedback
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        feedbacks,
        handleDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
