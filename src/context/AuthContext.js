import { createContext, useEffect, useState } from 'react';
import { authApp, firestoreApp } from '../config/firebase';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
 /*  let days = []

  for (let index = 0; index < 40; index++) {
    days.push(1641798000000+(86400000*index))
  }

  let manana = days.find(el => el > Date.now())
  let Now = manana - 86400000
  let auctions = Now.toString() */

  const [currentUser, setCurrentUser] = useState(null);

  const register = (email, password) => {
    return authApp.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return authApp.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return authApp.signOut();
  };

  const bidAuction = (auctionId) => {

    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).update({
      acuerdo:true
    });
  };

  const noteContext = (auctionId, note) => {

    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).update({
      note:note
    });
  };

   useEffect(() => {
    const subscribe = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return subscribe;
  }, []); 

 

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        bidAuction,
        noteContext
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
