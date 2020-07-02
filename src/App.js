import React from "react";
import Food from "./components/Food";
function App() {
  return (
    <div>
      HELLO <Food fav="potato" />
      <Food fav="chicken" />
      <Food fav="hotdog" />
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
