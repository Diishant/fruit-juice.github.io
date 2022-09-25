import { ReactDOM } from "react";
function NavigationMenu(props){
    const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
          <li>{number}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }
      