

interface Props{
    onClick: () => void;
}

const ButtonDismiss = ({onClick} : Props) => {
  return (
    <button 
        type="button" 
        className="btn btn-info"
        onClick={onClick}>
    </button>
  )
}

export default ButtonDismiss