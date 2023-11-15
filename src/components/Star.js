import { useState } from "react";
import "../styles.css";

const Star = (props) => {
  const [rating, setRating] = useState(props.rating || 1);
  let limit = props.limit || 1;

  const handleRating = (e) => {
    setRating(+e.target.getAttribute("data"));
  };

  return (
    <div>
      {[...new Array(limit).keys()].map((i) => (
        <span
          onClick={handleRating}
          key={i}
          data={i + 1}
          className={i < rating ? "star rated" : "star"}
        >
          {/* ⭐ */}
        </span>
      ))}
      <p>Rating : {rating}</p>
    </div>
  );
};
export default Star;
