import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from './components/alert';

function AppListGroup(){
  let items = [ 'NY', 'SF', 'TK', 'SP' ]
  const handleSelectItem = (item:string) => {
    console.log(item)
  }
  return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
}

function App(){
  <div>
    <Alert text={"sample"}></Alert>
  </div>
}
export default App;