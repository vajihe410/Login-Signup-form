import { Route , Switch , Redirect } from 'react-router-dom';
//components
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
