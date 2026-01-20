import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import MyButton from './components/MyButton';
import ButtonDismiss from './components/ButtonDismiss';
import AlertDismiss from './components/AlertDismiss';
import { useState } from 'react';
/*
function AppListGroup(){
  let items = [ 'NY', 'SF', 'TK', 'SP' ]
  const handleSelectItem = (item:string) => {
    console.log(item)
  }
  return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
}

function App(){
  <div>
    <Alert> Hello, World <span/></Alert>
  </div>
}
*/

function MyButtonApp(){
  return (<>
    <MyButton color="primary" onClick={() => console.log("MyButton Clicked")} children='button'></MyButton>
  </>)
}

function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  return (<>
    { alertVisible && <AlertDismiss children='' onClose={() => setAlertVisibility(false)}></AlertDismiss>}
    <ButtonDismiss onClick={() => setAlertVisibility(true)}></ButtonDismiss>
  </>)
}
export default App;