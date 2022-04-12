import './sidebar.scss'
import { Link } from 'react-router-dom'
import { GroupAdd, Public, Home } from "@material-ui/icons";
function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li><Link to="/" className="sidebarLink"><Home /></Link></li>
                <li><Link to="/Forms" className="sidebarLink"><Public /></Link></li>
                <li><Link to="/Countries" className="sidebarLink"><GroupAdd /></Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
