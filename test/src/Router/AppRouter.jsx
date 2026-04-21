import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Activities from '../pages/Activities';
import ActivityDetail from '../pages/ActivityDetail';
import Filter from '../pages/Filter';
import Stats from '../pages/Stats';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetail />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
