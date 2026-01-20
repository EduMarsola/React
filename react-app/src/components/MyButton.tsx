
interface Props{
    children : string;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}
const  MyButton = ({children, onClick, color = 'primary'} : Props) =>{
    return (<>
        <button 
            type="button" 
            className={'btn btn-'+color}
            onClick={onClick}
        >{children}</button>
    </>)
}

export default MyButton;