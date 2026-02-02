export function Nav() {
  return (
    <nav className="nav">
      <a href="/" style={{ fontSize: 16, letterSpacing: 0.4 }}>Ficus Ceramica</a>

      <div className="navLinks">
        <a href="/shop">shop</a>
        <a href="/info">info</a>
        <a href="/events">events</a>
        <a href="/journal">journal</a>
        <a href="/contact">contact</a>
      </div>
    </nav>
  );
}