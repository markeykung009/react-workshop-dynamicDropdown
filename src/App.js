import { useState } from "react";
import "./App.css";
import DropdownComponent from "./components/DropdownComponent";
import FoodComponent from "./components/FoodComponent";
import MenuData from "./data/MenuData";

function App() {
  const [food, setFood] = useState(MenuData);

  const changeFoodData = e => {
    const category = e.target.value;
    if (category === "เมนูทั้งหมด") {
      setFood(MenuData);
    } else {
      const result = MenuData.filter(el => {
        return el.menu === category;
      });
      setFood(result);
    }
  };

  return (
    <div className="container">
      <DropdownComponent changeFoodData={changeFoodData} />
      <div className="content">
        {food.map((el, idx) => (
          <FoodComponent key={idx} {...el} />
        ))}
      </div>
    </div>
  );
}

export default App;
