const Input = ({type,onChange,id,className,value,placeholder,onfocus,key,onClick}) =>{
    return(
        <input type={type} id={id} className={className} onChange={onChange} value={value} placeholder={placeholder} onFocus={onfocus} key={key} onClick={onClick}/>
    )
}

export default Input