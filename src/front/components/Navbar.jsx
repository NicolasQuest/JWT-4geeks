import { Link } from "react-router-dom";
import geeks from "../assets/img/4geeks.png";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";



export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();
	return (

		<nav className="navbar px-5" style={{ backgroundColor: "#2C3748" }}>
			<div className="container-fluid d-flex align-items-center justify-content-between">

				<div className="d-flex align-items-center gap-5">
					<a href="https://4geeks.com/es/login" target="_blank" rel="noopener noreferrer">
						<img src={geeks} alt="4Geeks Logo" />
					</a>

					<ul
						onClick={() => {
							Swal.fire({
								title: "Error!",
								text: "Content block..",
								icon: "error",
							});
						}}
						className="navbar-nav d-flex flex-row gap-3 mb-0"
					>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">Aprender ↓</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Career booster ↓</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Talento y Formación ↓</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Aprende en vivo ↓</a>
						</li>
					</ul>
				</div>

				{localStorage.getItem("token") && localStorage.getItem("refresh_token") ?
					<div className="d-flex align-items-center" style={{ height: "auto" }}>
						<div className="d-flex justify-content-center align-items-center me-3">
							<p
								style={{ cursor: "pointer" }}
								onClick={() => {
									Swal.fire({
										icon: 'info',
										title: 'Lost in translation',
										text: 'Just in English for the moment',
										confirmButtonText: 'Ok',
									});
								}}
								className="m-0 fs-3"
							>
								🇺🇸
							</p>
						</div>

						<div className="bordeNav d-flex justify-content-center align-items-center me-3">
							<button
								onClick={() => {
									Swal.fire({
										title: "Are you sure?",
										text: "You won't be able to revert this!",
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes, I want to leave"
									}).then((result) => {
										if (result.isConfirmed) {
											Swal.fire({
												title: "Logged out!",
												text: "See you soon.",
												icon: "success"
											});
											localStorage.removeItem("token");
											localStorage.removeItem("refresh_token");
											dispatch({ type: "logout" });
											navigate("/")
										}
									});

								}}
								className="btn btn-danger text-white ms-3"
							>
								Log out
							</button>
						</div>
						<div className="d-flex justify-content-center align-items-center">
							<p className="m-0 fs-3">👾</p>
						</div>
					</div>
					:
					<div className="d-flex align-items-center" style={{ height: "auto" }}>
						<p
							style={{ cursor: "pointer" }}
							onClick={() => {
								Swal.fire({
									icon: 'info',
									title: 'Lost in translation',
									text: 'Just in English for the moment',
									confirmButtonText: 'Ok',
								});
							}}
							className="m-0 fs-3"
						>
							🇺🇸
						</p>
						<div className="bordeNav d-flex justify-content-center align-items-center ms-3">
							<Link to="/Login">
								<button className="btn text-white ms-1 " >Log in</button>
							</Link>
						</div>
						<Link to="/Register">
							<button className="btn btn-primary ms-1 px-4 py-1">Get Started</button>
						</Link>
					</div>

				}
			</div>
		</nav >
	);
};
