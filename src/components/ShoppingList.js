import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, SetFilter ] = useState("Filter categorically");

  function doFilter(event){
    SetFilter(event.target.value)
  }

const displayItem = items.filter((item) => {
  if(filter === "Filter categorically"){
    return true;
  } else {
    return item.category === filter;
  }
})

const itemList = displayItem.map((item) => (
  <Item key={item.id} name={item.name} category={item.category} />
))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={doFilter}>
          <option value="All">Filter categorically</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
