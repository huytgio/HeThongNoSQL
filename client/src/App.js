import './App.css';
import { BrowserRouter as Brouter, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import About from './views/About';
import AuthContextProvider from './contexts/AuthContext';
import ProtectedRoute from './components/route/ProtectedRoute';
import PostContextProvider from './contexts/PostContext';
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Brouter>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
            <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/about' component={About} />
          </Switch>
        </Brouter>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
