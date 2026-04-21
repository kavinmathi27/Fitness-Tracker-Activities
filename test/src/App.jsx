import { AppProvider } from './Context/AppContext';
import AppRouter from './Router/AppRouter';
import './App.css';

export default function App() {
  return <AppProvider><AppRouter /></AppProvider>;
}
