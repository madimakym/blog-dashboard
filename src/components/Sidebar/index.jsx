import { NavLink } from 'react-router-dom';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className="brand">
                    <span>My Blog</span>
                </h3>
                <label for="sidebar-toggle" className="ti-menu-alt"></label>
            </div>

            <div className="sidebar-menu">
                <ul>
                    <li>
                        <NavLink to="/home">
                            <span className="ti-home"></span>
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
                        <NavLink to="/home">
                            <span className="ti-agenda"></span>
                            <span>Category</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/home">
                            <span className="ti-agenda"></span>
                            <span>Comments</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/home">
                            <span className="ti-clipboard"></span>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
                            <span className="ti-folder"></span>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/home">
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