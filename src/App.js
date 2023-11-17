import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useRef, useEffect } from "react";

function App() {
	const experienceRef = useRef(null);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);

	const scrollIntoView = (type) => {
		switch (type) {
			case "experience":
				experienceRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "projects":
				projectsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "skills":
				skillsRef.current.scrollIntoView({ behavior: "smooth" });
				break;

			default:
				break;
		}
	};

	return (
		<div
			className="App"
			style={{
				width: "100%",
			}}
		>
			<Navbar scrollIntoView={scrollIntoView} />
			<HomePage />
			<Experience experienceRef={experienceRef} />
			<Projects projectsRef={projectsRef} />
			<Skills skillsRef={skillsRef} />
		</div>
	);
}

export default App;
