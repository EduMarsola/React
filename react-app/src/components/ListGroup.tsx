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

function ListGroup() {
  let items = [ 'NY', 'SF', 'TK', 'SP' ]
  items = []
  return(
      <>
        <h1>Hello</h1>
        { items.length === 0 ? <p>No Items Found</p> : null} 
        <ul className="list-group">
            {items.map(item => <li key={item}>{item}</li>)} 
        </ul>
    </>
  );
}
export default ListGroup;
