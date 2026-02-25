import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar glass" aria-hidden="false">
      <Link to="/">🏡</Link>
      <Link to="/listings">🏘️</Link>
      <Link to="/about">ℹ️</Link>
      <Link to="/contact">📞</Link>
    </aside>
  );
}
