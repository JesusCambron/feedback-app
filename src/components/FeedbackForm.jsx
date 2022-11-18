import React, { useContext, useEffect, useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

const TAMANIO_MIN_TEXTO = 10;
const TAMANIO_MAX_TEXTO = 200;

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.feedback.text);
      setRating(feedbackEdit.feedback.rating);
    }
  }, [feedbackEdit]);

  const handleOnChange = (e) => {
    let newText = e.target.value;
    if (newText === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText !== "" && newText.trim().length < TAMANIO_MIN_TEXTO) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else if (newText.trim().length > TAMANIO_MAX_TEXTO) {
      setMessage("Text must be less than 200 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit && feedbackEdit.feedback.id) {
        newFeedback.id = feedbackEdit.feedback.id;
      }

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.feedback.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setRating(10);
      setBtnDisabled(true);
    }
  };

  return (
    <section className="container rating-form">
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect setRating={setRating} rating={rating} />
          <div className="text-review">
            <input
              onChange={handleOnChange}
              type="text"
              name=""
              id=""
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </section>
  );
};

export default FeedbackForm;
