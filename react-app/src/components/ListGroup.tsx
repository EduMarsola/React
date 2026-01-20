import { Fragment } from "react/jsx-runtime";
function ListGroupObsolet() { //forma de ter mais de um componente 
  return(
  <div>
      <h1>Hello</h1> 
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
  </div>
  );
}
function ListGroupStatic() {
  return(
  <>
      <h1>Hello</h1> 
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
  </>
  );
}

function ListGroupArrowFunction() {
  let items = [ 'NY', 'SF', 'TK', 'SP' ]
  items = []
  const getMessage = () => {
    return items.length === 0 ? <p>No Items Found</p> : null
  }
  return(
      <>
        <h1>Hello</h1>
        { getMessage() } 
        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)} 
        </ul>
    </>
  );
}

import { useState, type MouseEvent } from "react";
function ListGroupEventHandler() {
  let items = [ 'NY', 'SF', 'TK', 'SP' ]
  let selectedIndex = -1;
  //eventHandler
  const handleClick = (event : MouseEvent) => console.log(event);
  return(
      <>
        <h1>Hello</h1>
        { items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item, index) => 
              <li 
                className={ selectedIndex === index 
                            ? "list-group-item active" 
                            : "list-group-item"} 
                key={item} 
                onClick={handleClick}>{item}
              </li>)
            } 
        </ul>
    </>
  );
}

function ListGroupHook() {
  let items = [ 'NY', 'SF', 'TK', 'SP' ]
  const [selectedIndex, setSelectedIndex] = useState(-1)
  useState("",)
  return(
      <>
        <h1>Hello</h1>
        { items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item, index) => 
              <li 
                className={ selectedIndex === index 
                            ? "list-group-item active" 
                            : "list-group-item"} 
                key={item} 
                onClick={() => setSelectedIndex(index)}>{item}
              </li>)
            } 
        </ul>
    </>
  );
}

interface PropsAtributtes{
    items: string[];
    heading: string;
}

function ListGroupProps({items, heading} : PropsAtributtes) {
  
  
  const [selectedIndex, setSelectedIndex] = useState(-1)
  useState("",)
  return(
      <>
        <h1>{heading}</h1>
        { items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item, index) => 
              <li 
                className={ selectedIndex === index 
                            ? "list-group-item active" 
                            : "list-group-item"} 
                key={item} 
                onClick={() => setSelectedIndex(index)}>{item}
              </li>)
            } 
        </ul>
    </>
  );
}


interface PropsFunctions{
    items: string[];
    heading: string;
    onSelectItem : (item:string) => void;
}

function ListGroup({items, heading, onSelectItem} : PropsFunctions) {
  
  
  const [selectedIndex, setSelectedIndex] = useState(-1)
  useState("",)
  return(
      <>
        <h1>{heading}</h1>
        { items.length === 0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item, index) => 
              <li 
                className={ selectedIndex === index 
                            ? "list-group-item active" 
                            : "list-group-item"} 
                key={item} 
                onClick={
                  () => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                  }
                }
              >
                    {item}
              </li>)
            } 
        </ul>
    </>
  );
}

export default ListGroup;
