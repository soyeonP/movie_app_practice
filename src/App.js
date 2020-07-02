import React from "react";
import Food from "./components/Food";


const foodILike = [
  {
    name: "Kimchi",
    image: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.i-scmp.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F980x551%2Fpublic%2F2013%2F11%2F08%2Fkimchi.jpg%3Fitok%3DiL6Mnqub&f=1&nofb=1`,
    rating: 4.1,
  },
  {
    name: "Samgyupsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.K8iCCcUHHzpbMvmkx1Z9twHaE8%26pid%3DApi&f=1",
    rating: 5,
  },
  {
    name: "Bibimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.V2AdgXdvK2tsEsQENuwuAAHaE7%26pid%3DApi&f=1",
    rating: 4.3,
  },
  {
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YMV6JK5HgHAJq5ubYDL2BQHaEC%26pid%3DApi&f=1",
    rating: 4.5,
  },
  {
    name: "Kimbobs",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OOXjp-9vrx07XkZ4ACg4pQHaE8%26pid%3DApi&f=1",
    rating: 4,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.name}
          name={dish.name}
          img={dish.image}
          rating={dish.rating}
        ></Food>
      ))}
    </div>
  );
}

export default App;
