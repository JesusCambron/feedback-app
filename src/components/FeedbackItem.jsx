import Card from "./shared/Card";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FeedbackContext } from "../context/FeedbackContext";
import { useContext } from "react";
import Button from "./shared/Button";

export const FeedbackItem = ({ feedback }) => {
  /* const handleClick = (id) => {
    setRating((prev)=>{
      return prev + 1;
    })
  }; */
  const { handleDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <section className="feedback">
      <Card>
        <div className="num-display">
          <span className="bold">Rating: {feedback.rating}</span>
          <span>{"⭐".repeat(feedback.rating)}</span>
        </div>
        <div className="text-display">
          <p>{feedback.text}</p>
        </div>
        <div className="actions-buttons">
          <Button
            onClickEvent={() => handleDelete(feedback.id)}
            version={"delete"}
          >
            <FaTrash />
          </Button>
          <Button onClickEvent={() => editFeedback(feedback.id)}>
            <FaEdit />
          </Button>
        </div>
      </Card>
    </section>
  );
};
