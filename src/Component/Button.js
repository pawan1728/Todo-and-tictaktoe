const Button = ({className,Name,id,onClick}) =>{
    return(
        <button className={className} id={id} onClick={onClick} >{Name}</button>
    )
}
export default Button