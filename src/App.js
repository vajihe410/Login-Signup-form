import { Route , Routes , Navigate } from 'react-router-dom';
//components
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/' element={<Navigate to="/signup" />}/>
      </Routes>
    </div>
  );
}

export default App;
