import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
	return (
		<div
			className="App"
			style={{
				width: "100%",
			}}
		>
			<Navbar />
			<HomePage />
			<Experience />
			<Projects />
			<Skills />
		</div>
	);
}

export default App;
