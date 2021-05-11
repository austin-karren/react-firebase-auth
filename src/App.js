import React, { useContext } from 'react';
import './index.css';
import { AuthContext } from './providers/AuthProvider';
import routes from './routes';
import Profile from './components/Profile';

const App = () => {
  const context = useContext(AuthContext);

  console.log(context);

  return(
    <div className='App'>
      {context.user ?
        <Profile />
        :
        <div className='routes'>
          {routes}
        </div>
      }

    </div>
  )
}

export default App;