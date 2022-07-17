import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  
  const [ Dark, setDark ] = useState(false);
  
  function setDarkMode(){
    setDark((Dark)=>!Dark)
  }

  
  return (
    <div className={Dark ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button  onClick={setDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;