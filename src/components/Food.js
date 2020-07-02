import React from "react";

function Food(props) {
  const { fav } = props;
  console.log(props);
  return <h1>I like {fav}</h1>;
}

export default Food;
