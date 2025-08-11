export function Nav() {
  return (
    <nav className="nav d-flex justify-content-between align-items-center">
      <h5 className="nav-name">Maximo Kugler</h5>
      <ul className="d-flex justify-content-end gap-4">
        <li className="nav-item">
          <a
            className="nav-link active nav-btn"
            aria-current="page"
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-btn" href="#projects">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-btn" href="#skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-btn" href="#aboutme">
            About me
          </a>
        </li>
      </ul>
    </nav>
  );
}
