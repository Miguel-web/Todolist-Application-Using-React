import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PutTask from "./todolist.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container text-center bg-light">
			<h1>Todo-List</h1>
			<PutTask/>
		</div>
	);
};

export default Home;
