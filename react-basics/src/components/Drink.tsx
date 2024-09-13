import { useState } from "react";

const Drink = () => {
  const [drinkInfo, setDrinkInfo] = useState({
    title: "Mojito",
    price: 100,
  });

  const [feelings, setFeelings] = useState(["kind", "caring", "angry"]);
  const handleClick = () => {
    setDrinkInfo({ ...drinkInfo, price: 120 });
    setFeelings([...feelings, "happy"]);
    setFeelings(feelings.filter((feeling) => feeling != "angry"));
    setFeelings(
      feelings.map((feeling) => (feeling == "kind" ? "kindness" : feeling))
    );
  };

  return (
    <div>
      {drinkInfo.price} <button onClick={handleClick}>Update Price</button>
      {feelings.join(" ")}
    </div>
  );
};

export default Drink;
