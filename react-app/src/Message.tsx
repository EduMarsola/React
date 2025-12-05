//PascalCasing
function Message(){
    //jsx -> converte em JS com XML
    const name = 'mew';
    if(name != null){
        return  <h1>Hello, {name}</h1>;
    }
    return <h1>Hello, world</h1>
}
export default Message;