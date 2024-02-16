import "../NavBar/Navbar.modules.css"

const NavBar = () => {
  return (
  <nav>
    <h1>Pedro Barbosa</h1>
    <div className="nav-itens">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About-me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact-me</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar
