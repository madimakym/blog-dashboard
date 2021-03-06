import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className="brand">
                    <span>BLOG - DASHBOARD</span>
                </h3>
                <label for="sidebar-toggle" className="ti-menu-alt"></label>
            </div>

            <div className="sidebar-menu">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <AiOutlineHome />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/post">
                            <span className="ti-face-smile"></span>
                            <span>Post</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">
                            <span className="ti-agenda"></span>
                            <span>Category</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/comments">
                            <span className="ti-agenda"></span>
                            <span>Comments</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/messages">
                            <span className="ti-clipboard"></span>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <span className="ti-folder"></span>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">
                            <span className="ti-time"></span>
                            <span>Log out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;