import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PasswordReset from './components/ResetPassword';

export default (
   <Switch>
      <Route exact path='/' component={SignIn} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/password-reset' component={PasswordReset} />
   </Switch>
);