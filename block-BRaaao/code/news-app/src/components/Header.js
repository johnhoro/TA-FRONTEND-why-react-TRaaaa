function Header() {
  return (
    <>
      <header className="header flex justify-between">
        <a href="index.html">Gizmo</a>
        <nav className="nav">
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
