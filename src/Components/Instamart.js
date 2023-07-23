import React, { useState } from "react";

function Section({
	title,
	description,
	isVisible,
	setIsVisible,
	setInvisible,
}) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{isVisible && description}</p>
			{isVisible ? (
				<button onClick={() => setInvisible(true)}>Hide</button>
			) : (
				<button onClick={() => setIsVisible(true)}>Show</button>
			)}
		</div>
	);
}

export default function Instamart() {
	const [visibleSection, setvisibleSection] = useState("Team");
	return (
		<div className="container">
			<Section
				title={"Team"}
				description={
					"Lorem ipsum dolr sit amet consectetur adipisicing elit. Similique rem optio reiciendis eligendi qui minima enim vero nemo, expedita, numquam temporibus architecto vitae, repellat est!"
				}
				isVisible={visibleSection === "Team"}
				setIsVisible={() => setvisibleSection("Team")}
				setInvisible={() => setvisibleSection("")}
			/>

			<Section
				title={"Aryan"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem optio reiciendis eligendi qui minima enim vero nemo, expedita, numquam temporibus architecto vitae, repellat est!"
				}
				isVisible={visibleSection === "Aryan"}
				setIsVisible={() => setvisibleSection("Aryan")}
				setInvisible={() => setvisibleSection("")}
			/>

			<Section
				title={"About"}
				description={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem optio reiciendis eligendi qui minima enim vero nemo, expedita, numquam temporibus architecto vitae, repellat est!"
				}
				isVisible={visibleSection === "About"}
				setIsVisible={() => setvisibleSection("About")}
				setInvisible={() => setvisibleSection("")}
			/>
		</div>
	);
}
