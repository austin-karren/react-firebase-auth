import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
   const context = useContext(AuthContext);
   const { photoURL, displayName, email } = context.user;

   const handleSignOut = () => {
      context.signOut()
   }

   return(
      <div>
         <div style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'}) no-repeat center center`,
            backgroundSize: "cover",
            height: "200px",
            width: "200px"
         }}></div>
         <h2>{displayName}</h2>
         <h3>{email}</h3>
         <button onClick={() => handleSignOut()}>Sign out</button>
      </div>
   )
}

export default Profile;