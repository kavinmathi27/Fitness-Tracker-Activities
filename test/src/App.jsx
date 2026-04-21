import { AppProvider } from './Context/AppContext';
import AppRouter from './Router/AppRouter';
import './App.css';

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
