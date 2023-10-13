import logo from './logo.svg';
import './App.css';
import DataChange from './components/DataChange';

function App() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '50vh',
    }}>
      <DataChange />
      
    </div>
  );
}

export default App;
