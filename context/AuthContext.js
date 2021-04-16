import { createContext, useState, useEffect } from "react";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import { useRouter } from "next/router";

const AuthContext = createContext();

let magic

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleRedirect = async (magic_credential) => {
    try {
	  	await magic.auth.loginWithCredential(magic_credential);

	  	checkUserLoggedIn().then(() => {
	  		console.log("llego aqui")
	  	})
  	} catch (err) {
  		console.log(err)
  	}

  	return "usuario logueado";
  }
 
  const loginUser = async (email, redirectURI) => {
    try {
      await magic.auth.loginWithMagicLink({ email: email, showUI: true, redirectURI: redirectURI });
      setUser({ email });
    } catch (err) {
      console.log(err);
    }
  };

  const logoutUser = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  const checkUserLoggedIn = async () => {
    try {
        const isLoggedIn = await magic.user.isLoggedIn();

        if (isLoggedIn) {
            const { email } = await magic.user.getMetadata();
            setUser({ email });

            //redirect?
            //router.push("/payment")
            
            //for testing
            const token = await getToken();
            console.log("checkUserLoggedIn token", token);
        }
    } catch (err) {
        console.log(err);
    }
  };

  const getToken = async () => {
    try{
      const token = await magic.user.getIdToken()
      return token
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY, {locale: "es"})
        
        checkUserLoggedIn()
  }, []);

  return (
    <AuthContext.Provider value={{ user, logoutUser, loginUser, getToken, handleRedirect }}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext;