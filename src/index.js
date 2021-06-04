import React from "react";
import render from "react-dom";

import Menu from "./Menu";

render(
	<Menu recipes={data} />
	document.getElementById("root")
);