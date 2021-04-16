import AuthContext from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";

import { API_URL } from '../utils/urls'
import Link from 'next/link'
import Spinner from '../components/Spinner';

import { useRouter } from 'next/router'

const useValidateDidToken = async (magic_credential) => {

	const { handleRedirect } = useContext(AuthContext)
	await handleRedirect(magic_credential)
}

const usePaymentPage = (user, getToken) => {
	const router = useRouter()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const redirectToPaymentPage = async () => {

            setLoading(true)

            if(user){
                try{
                    const token = await getToken();

                    // get this data from query string to generate the checkout page url
                    let body = {
                    	plan_id: "klouser-apapachoastral",
                    	coupon_id: "pre-launch-astrofilico"
                    }

                    await fetch(`${API_URL}/api/generate-checkout-url`, {
                    	method: 'post',
                    	body: JSON.stringify(body),
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }).then( (resp) => {
                    	return resp.json()
                    }).then( (result) => {
                    	router.push(result.hosted_page.url)
                    });
                } catch(err){
                    console.log(err)
                }
            }
        	setLoading(false)        
        }

        redirectToPaymentPage()
    }, [user])
    
    return {loading}
}


function Named() {

	const router = useRouter()

	if (router.query.magic_credential)
		useValidateDidToken(router.query.magic_credential)

	const { user, getToken } = useContext(AuthContext)

	const { loading } = usePaymentPage(user, getToken)

    return (
    	<main className="h-screen center-v w-full">
            <div className="container">
                <Spinner /> 
                <p className="text-center">Redireccionando a una página de pago seguro...</p>
            </div>
    	</main>

	)
}

export default Named;







/*
export default function Callback () {
 	const router = useRouter();

    const [loading, setLoading] = useState(false)
	const { user, logoutUser, getToken, handleRedirect} = useContext(AuthContext)

 	useEffect(() => {
		//router.query.provider ? finishSocialLogin() : finishEmailRedirectLogin();
		finishEmailRedirectLogin();
  	}, [loading]);

   // `getRedirectResult()` returns an object with user data from Magic and the social provider
  //	const finishSocialLogin = async () => {
    //	let result = await magic.oauth.getRedirectResult();
    //	checkUserLoggedIn(result.magic.idToken);
  //	};

 	// `loginWithCredential()` returns a didToken for the user logging in
 	const finishEmailRedirectLogin = async () => {
        setLoading(true)

    	if (router.query.magic_credential)
    		await handleRedirect(router.query.magic_credential)

    	console.log(user)

	 	if(user){
            try{
                const token = await getToken()

                const res = await fetch(`${API_URL}/subscribers/checkout-page`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                var data = await res.json()
                
                router.push(data.url);
            } catch(err){
                console.log(err)
            }
        }
		setLoading(false)
	}

	return (
          <Loading />
	);

}
*/


/*
let magic

const usePaymentPage = (user, getToken) => {
	const router = useRouter()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        const redirectToPaymentPage = async () => {

            setLoading(true)

            if(user){
            	console.log(user)
                try{
                    const token = await getToken()

                    const res = await fetch(`${API_URL}/subscribers/checkout-page`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })

                    var data = await res.json()
                    
                    router.push(data.url);
                } catch(err){
                    console.log(err)
                }
            }
        	setLoading(false)        
        }

        redirectToPaymentPage()
    }, [user])



    return {loading}
}

const loginWithCredential = async (magic_credential) => {
	if(magic_credential){
		try {
			console.log("paso")
			var data = await magic.auth.loginWithCredential(magic_credential);
			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}
};

function Named() {

	const router = useRouter()

	useEffect(() => {
    	magic = new Magic(MAGIC_PUBLIC_KEY, {locale: "es"})
        
    	loginWithCredential(router.query.magic_credential)
	}, []);


    const { user, logoutUser, getToken} = useContext(AuthContext)

    const { loading } = usePaymentPage(user, getToken)

    return (
    	<div>
            {loading && <p>Redireccionando a la página de pago...</p>}
    	</div>

	)
}


//Named.getInitialProps = async (ctx) => {
//	console.log(ctx.query)
//http://localhost:3000/payment?magic_credential=WyIweDQ2ZDM3MWQ2ZWM3NGRlNjVkYTA5NjdjMzY1NGFkZDA5YmRjZGRhM2JiZTZkMmI2MTI4NGU0ZWIzOWFlNmZlODY1OGZkZWJlMjY5ZDE0MzdhMTM0YWQ1MTRjYTliOTM2OTMyMTc2M2NlYjQ5MjljMzQyZTA1MDY5ZDE4ZTY0MGRkMWIiLCJ7XCJpYXRcIjoxNjE2Mzg3NDk3LFwiZXh0XCI6MTYxNjM4ODM5NyxcImlzc1wiOlwiZGlkOmV0aHI6MHhDYzZDRTQzNkE2M0NhNWE0ODExMTkzQTQ0RDJmOTI4NjQxODVDNDg0XCIsXCJzdWJcIjpcImhyRF83NjREdEdmQkl1UnN5V214bjBSOFZSM3FCQlNLUEZVd2RNZ0wtZWM9XCIsXCJhdWRcIjpcIkxJN29wX2pxa2JUS1NDdndhX24zUWVMOFlCbTdYSUVUT1hNQmxRQzR3Z0U9XCIsXCJuYmZcIjoxNjE2Mzg3NDk3LFwidGlkXCI6XCJjYTAxZWVmNS0yYzk4LTQ2YTctOTk2Mi04MGFkMzEzZTA0Y2ZcIixcImFkZFwiOlwiMHgzMzFmNjM5ZjI2NmJmYWQyZTIxMThiMWM4YTMwOGE0MzEzMTU1MWI0NDg2ZGYyZmU0ZGE4ZmFlYTIwMmVhZjIxMzY5YjkwZTQ5ODQ0ZGI3OGFlYzRkZDdiZDQyYTdkMGMwYTJlZmM4N2Y2OGE3NGI3YTJiYTMxOWVhMGNkNGJmZjFjXCJ9Il0%3D


//	return;
//}


export default Named;
*/