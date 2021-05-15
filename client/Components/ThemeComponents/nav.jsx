const Navbar = () => {
    return (
        <header className="navHeader">
            <div className="navContainer">
                <nav class="nav">
                    <ul className="nav-list nav-list-mobile">
                        <li className="nav-item">
                            <div className="mobile-menu">
                                <span className="line line-top"></span>
                                <span className="line line-bottom"></span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link nav-link-logo"></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link nav-link-bag"></a>
                        </li>
                    </ul>
                    {/* .nav-list nav-list-mobile  */}
                    <ul className="nav-list nav-list-larger">
                        <li className="nav-item nav-item-hidden">
                            <a href="#" class="nav-link nav-link-logo"></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">Nutrition</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">Supplements</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">Labs</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">Programs</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link">Support</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link nav-link-search"></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" class="nav-link nav-link-bag"></a>
                        </li>
                    </ul>
                    {/* .nav-list nav-list-Larger  */}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;