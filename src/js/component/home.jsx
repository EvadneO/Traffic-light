import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="rojo">
				<a
					href="#"
					className="btn btn-danger"
					onClick={() =>
						function setColor(evento) {
							const [red, setColorRed] = useState("");
							if (evento.target.classList.contains("red")) {
								setColorRed("selected");
							}
							<div
								className={"red circulo " + red}
								onClick={setColor}></div>;
						}
					}></a>
			</div>
			<div className="amarillo">
				<a
					href="#"
					className="btn btn-warning"
					onClick={() =>
						function setColor(evento) {
							const [yellow, setColorYellow] = useState("");
							if (evento.target.classList.contains("yellow")) {
								setColorYellow("selected");
							}
							<div
								className={"yellow circulo " + yellow}
								onClick={setColor}></div>;
						}
					}></a>
			</div>
			<div className="verde">
				<a
					href="#"
					className="btn btn-success"
					onClick={() =>
						function setColor(evento) {
							const [green, setColorGreen] = useState("");
							if (evento.target.classList.contains("green")) {
								setColorGreen("selected");
							}
							<div
								className={"green circulo " + green}
								onClick={setColor}></div>;
						}
					}></a>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Home;
