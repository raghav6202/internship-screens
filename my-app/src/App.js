import logo from './logo.svg';
import { Screen1 } from './screens/screen1/screen1.jsx';
import { Screen2 } from './screens/screen2/screen2.jsx';
import { Screen3 } from './screens/screen3/screen3.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
     <Screen1 />
     <Screen2 />
     <Screen3 />
    </div>
  );
}

export default App;
