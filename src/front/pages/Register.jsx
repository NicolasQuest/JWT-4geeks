import React, { useState } from "react";
import geeksimg from "../assets/img/geeksimg.png";
import { useNavigate } from "react-router";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import Swal from 'sweetalert2';


export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()
	const tokenExpired = localStorage.removeItem("token");


	const createUser = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`${backendUrl}register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});
			if (!response.ok) {
				throw new Error("There was a problem in the register request");
			}

			const data = await response.json();
			Swal.fire({
				title: "Success!",
				text: "User Created",
				icon: "success",
			});
			navigate("/login")


		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div className=" d-flex flex-column justify-content-center align-items-center">
			<img src={geeksimg} alt="Logo" />
			<form className="w-25 mt-4" onSubmit={createUser}>
				<div className="form-group py-2">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="form-group pb-2 py-2">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="text-center py-2">
					<button type="submit" className="btn btn-primary w-100">
						Register
					</button>
				</div>
			</form>
			<img className="mt-5" src="https://www.siliconrepublic.com/wp-content/uploads/2015/05/register-to-vote-meme-3.jpg" />
		</div>

	);
};
