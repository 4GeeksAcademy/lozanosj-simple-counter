import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counterx from "./Counters";
import Counter from "./Ejemplo";

//create your first component
const Home = () => {
	return (
		<div>
			<Counter />
		</div>
	);
};

export default Home;
