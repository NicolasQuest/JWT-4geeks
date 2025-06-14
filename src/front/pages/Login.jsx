import React, { useState } from "react"
import { useNavigate } from "react-router";
import geeksimg2 from "../assets/img/geeksimg2.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import Swal from 'sweetalert2';

export const Login = () => {
	const { dispatch } = useGlobalReducer();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate()
	const handleLogin = async (e) => {
		e.preventDefault();


		try {
			const response = await fetch(`${backendUrl}login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error("There was a problem in the login request");
			}

			const data = await response.json();
			localStorage.setItem("token", data.token);
			localStorage.setItem("refresh_token", data.refresh_token);

			dispatch({
				type: "login_success",
				payload: {
					token: data.token,
					refreshToken: data.refresh_token,
				},
			});

			Swal.fire({
				title: "Logged In",
				text: "Welcome back!",
				icon: "success",
			});
			navigate("/User");
		} catch (err) {
			Swal.fire({
				title: "Login failed",
				text: err.message,
				icon: "error",
			});
		}
	}






	return (
		<div className="row">
			<div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
				<img
					onClick={() => {
						Swal.fire({
							title: "Info",
							text: "This is just an image",
							icon: "question",
						});
					}}
					src={geeksimg2}
					alt="Logo"
				/>
				<form className="w-50 mt-4" onSubmit={handleLogin}>
					<div className="form-group py-2">
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className="form-group pb-2 py-2">
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<div className="text-center py-2">
						<button type="submit" className="btn btn-primary w-100">
							Log In
						</button>
					</div>
				</form>
			</div>
			<div className="col-12 col-lg-6">
				<img
					src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
					style={{ width: "100%", height: "100vh", objectFit: "cover" }}
				/>
			</div>
		</div>
	);
}; 