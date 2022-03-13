
function Header() {
    return (
        <header>
            <div className="search-wrapper">
                <span className="ti-search"></span>
                <input type="search" placeholder="Search" />
            </div>

            <div className="social-icons">
                <span className="ti-bell">xx</span>
                <span className="ti-comment"></span>
                <div></div>
            </div>
        </header>
    );
}
export default Header;