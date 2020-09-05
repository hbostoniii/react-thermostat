import React, { useState } from "react";

import "./App.css";

function App() {
	const [temp, setTemp] = useState(68);
	const [units, setUnits] = useState("ºF");

	const celsiusToFahrenheit = () => {
		setUnits("ºF");
		setTemp(+((temp / 5) * 9 + 32).toFixed(0));
	};

	const fahrenheitToCelsius = () => {
		setUnits("ºC");
		setTemp(+(((temp - 32) * 5) / 9).toFixed(0));
	};

	const fahrenheitStyles = () => {
		if (temp >= 86) {
			return { color: "red" };
		} else if (temp <= 50) {
			return { color: "blue" };
		}
		return { color: "black" };
	};

	const celsiusStyles = () => {
		if (temp >= 30) {
			return { color: "red" };
		} else if (temp <= 10) {
			return { color: "blue" };
		}
		return { color: "black" };
	};

	return (
		<div className="App">
			<h1 style={units === "ºF" ? fahrenheitStyles() : celsiusStyles()}>
				{temp}
				{units} <br />
				<span style={{ fontSize: "2rem", color: "gray" }}>
					(temperature rounded to nearest integer)
				</span>
			</h1>
			<div className="btn-wrapper">
				<button onClick={() => setTemp(temp - 1)} className="tempChange">
					-
				</button>
				<button
					onClick={units === "ºF" ? fahrenheitToCelsius : celsiusToFahrenheit}
					className="unitChange">
					Change units
				</button>
				<button onClick={() => setTemp(temp + 1)} className="tempChange">
					+
				</button>
			</div>
		</div>
	);
}

export default App;
