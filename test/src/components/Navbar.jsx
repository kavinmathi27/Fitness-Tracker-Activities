import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/activities" className="nav-brand">FitTracker</Link>
        <ul className="nav-links">
          <li><NavLink to="/activities" className={({ isActive }) => isActive ? 'active' : ''}>Activities</NavLink></li>
          <li><NavLink to="/filter"     className={({ isActive }) => isActive ? 'active' : ''}>Filter</NavLink></li>
          <li><NavLink to="/stats"      className={({ isActive }) => isActive ? 'active' : ''}>Stats</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
