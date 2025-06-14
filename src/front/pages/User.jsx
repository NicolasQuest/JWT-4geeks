import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router";
import geeksimg from "../assets/img/geeksimg.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const User = () => {

	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const navigate = useNavigate();
	const [userEmail, setUserEmail] = useState(null)

	const [count, setCount] = useState(0);
	const { store } = useGlobalReducer();


	const suma = () => {
		const nuevoCount = count + 1;
		setCount(nuevoCount);
		localStorage.setItem('count', nuevoCount.toString());
	};

	useEffect(() => {
		fetchProtected();
	}, []);


	const fetchProtected = async () => {
		const token = localStorage.getItem("token");
		try {
			const response = await fetch(`${backendUrl}protected`, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			});

			if (response.status === 401) {
				console.log("Expired token, trying to refresh");
				await refresh();
				return;
			}

			if (!response.ok) {
				throw new Error("Error in the request");
			}

			const data = await response.json();
			setUserEmail(data.email);
		} catch (error) {
			console.error("Error in protected request", error);
		}
	};

	const refresh = async () => {
		const refreshToken = localStorage.getItem("refresh_token");
		try {
			const response = await fetch(`${backendUrl}refresh`, {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${refreshToken}`,
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error("Expired refresh token");
			}

			const data = await response.json();
			localStorage.setItem("token", data.access_token);

			await fetchProtected();
		} catch (error) {
			console.error("Error trying to refresh the token", error);
			navigate("/login");
		}
	};


	console.log("Access token actual:", localStorage.getItem("token"));




	return (
		<div>
			<div className="d-flex justify-content-center mt-5 flex-column align-items-center">

				<h1 className="text-white">Bienvenido {userEmail} </h1>
				<img src="https://preview.redd.it/bruteforceattackprotection-v0-vwjigsuvzdjc1.jpeg?width=640&crop=smart&auto=webp&s=dc2295491ecdf73ce56fe0ef53c2ace9daa590bf" />

				{count === 10
					? <button onClick={suma} className="btn btn-success mt-2">Like Button 👍 WOW!! we reached 10 likes, keep going! </button>
					: <button onClick={suma} className="btn btn-success mt-2">Like Button 👍 {count} </button>}
			</div>
		</div >
	);
}; 