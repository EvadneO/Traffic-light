import React, { useState } from "react";
import "../styles/index.css";

//create your first component
function Semaforo() {
	const [red, setColorRed] = useState("");
	const [yellow, setColorYellow] = useState("");
	const [green, setColorGreen] = useState("");

	function setColor(e) {
		if (e.target.classList.contains("red")) {
			setColorRed("selected");
			setColorYellow("");
			setColorGreen("");
		}

		if (e.target.classList.contains("yellow")) {
			setColorRed("");
			setColorYellow("selected");
			setColorGreen("");
		}

		if (e.target.classList.contains("green")) {
			setColorRed("");
			setColorYellow("");
			setColorGreen("selected");
		}
	}
	return (
		<div className="container">
			<div className={"red circulo " + red} onClick={setColor}></div>

			<div
				className={"yellow circulo " + yellow}
				onClick={setColor}></div>

			<div className={"green circulo " + green} onClick={setColor}></div>
		</div>
	);
}
export default Semaforo;
