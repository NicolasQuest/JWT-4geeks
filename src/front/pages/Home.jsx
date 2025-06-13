import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import homePhoto from "../assets/img/home.png"
export const Home = () => {





	return (
		<div className="text-center mt-5">

			<div>
				<img src={homePhoto} className="img-fluid mb-3" alt="Rigo Baby" />
			</div>

		</div>
	);
}; 