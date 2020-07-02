import React from "react";
import PropTypes from "prop-types";

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function Food(props) {
  const { name, img, rating } = props;
  console.log(props);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img alt={name} src={img} />
    </div>
  );
}

export default Food;
