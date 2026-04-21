import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Filter from './pages/Filter';
import Stats from './pages/Stats';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <nav className="navbar">
          <div className="nav-container">
            <h1>Activity Tracker</h1>
            <ul className="nav-links">
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/filter">Filter</Link></li>
              <li><Link to="/stats">Stats</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/" element={<Activities />} />
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
