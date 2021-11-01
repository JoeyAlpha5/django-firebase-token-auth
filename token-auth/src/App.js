import React, {useState} from 'react';
import SignInScreen from './Screens/SignInScreen';
import HomeScreen from './Screens/HomeScreen';
import { authentication } from './Firebase/Firebase';

function App() {
  const [isSignedIn,setIsSignedIn] = useState(false);
  // update state when users signs in
  authentication.onAuthStateChanged((user)=>{
    if(user){
      setIsSignedIn(true);
    }
    else{
      setIsSignedIn(false);
    }
  })

  
  return (
    <>
      {isSignedIn === true?
        <HomeScreen/>
        :
        <SignInScreen/>
      }
    </>
  );
}

export default App;
