import Head from "next/head";
import { useContext, useState} from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";

export default function Login() {
	const [input, setInput] = useState("");
	const { loginUser } = useContext(AuthContext);
	const router = useRouter();

	let redirectUrl = "http://localhost:3000" + router.query.ru;
	console.log(redirectUrl);

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(redirectUrl);

		loginUser(input, redirectUrl)
	}

	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login here to be able to purchase" />
			</Head>

			<Header />

			<main className="h-screen center-v bg-gradient-to-br from-brand to-brand-strong">
				<div className="container-sm text-center">

					<div className="card p-6 bg-white">
						<form onSubmit={handleSubmit} className="w-full">
							<h1 className="text-4xl mb-6">Ingersa a tu cuenta de Klouser</h1>
							<input
								value={input}
								onChange={(e) => setInput(e.target.value)}
								type="email"
								placeholder="Email address..."
								className="w-full bg-gray-100 border border-gray-300 text-base py-3 px-3 rounded-lg mb-4"
							/>
							<button type="submit" className="btn btn-lg bg-brand">Ingresar</button>
						</form>
					</div>
				</div>

			</main>

		</>
	);
}
