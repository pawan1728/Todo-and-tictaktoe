import logo from '../../Assets/logo.png'
const Header = () =>{
    return(
        <div className="m-2 p-2 w-auto bg-gray-400">
            <div className="flex justify-between items-center p-4">
                <img src={logo} alt='logo' className='w-28'/>
                <ul className='flex justify-between'>
                    <li className='m-2 p-2 cursor-pointer'>Home</li>
                    <li className='m-2 p-2 cursor-pointer'>Todo</li>
                    <li className='m-2 p-2 cursor-pointer'>About</li>
                    <li className='m-2 p-2 cursor-pointer'>Contact us</li>
                    <li className='m-2 p-2 cursor-pointer'>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header