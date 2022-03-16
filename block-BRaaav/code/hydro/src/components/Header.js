function Header() {
  return (
    <header className="navbar">
      <div className="container flex">
        <div className="flex">
          <a className="brand" href="#h">
            <strong>Hydro</strong>
          </a>
          <nav>
            <ul className="flex nav-menu nav-menu-primary">
              <li>
                <a href="#h">Home</a>
              </li>
              <li>
                <a href="#h">About</a>
              </li>
              <li>
                <a href="#h">Blog</a>
              </li>
              <li>
                <a href="#h">Our Work</a>
              </li>
              <li>
                <a href="#h">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul className="flex nav-menu nav-menu-secondary">
            <li className="social-media-item">
              <a href="h#">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="h#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-media-item">
              <a href="#h">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="btn btn-primary" href="#header">
                {" "}
                Sign in / Join{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
