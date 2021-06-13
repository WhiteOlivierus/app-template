import * as React from "react";
import * as ReactDOM from "react-dom";
import Engine from "Engine";
import projectData from "./projectData";

const importAll = (resource) => resource.keys().map(resource);

importAll(require.context("./img", false, /\.(png|jpe?g|gif)$/));

const preProcessor = {
	...projectData,
	images: [...projectData.images.map((i) => `static://img/${i}`)],
};

ReactDOM.render(
	<Engine data={preProcessor} />,
	document.getElementById("root")
);
