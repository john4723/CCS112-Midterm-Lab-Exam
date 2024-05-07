import { Link } from 'react-router-dom'
import Logo from '../assets/mcpdr.png';

function Header(){
    return(
        <nav>
			<ul>
				<li className='logo'><Link to="/"><img src={Logo} className='logo-img'/></Link></li>
				<li className='link-add-items'><Link to="/AddItem">Add Item</Link></li>
			</ul>
    	</nav>
    );
}

export default Header;