import React from "react";
import styles from "./Skills.module.scss";

function Skills() {
	const skills = [
		{
			name: "AngularJS",
			image: "icons/skills/angular.svg",
		},
		{
			name: "Bootstrap",
			image: "icons/skills/Bootstrap.svg",
		},
		{
			name: "MongoDB",
			image: "icons/skills/mongodb.svg",
		},
		{
			name: "NestJS",
			image: "icons/skills/nestjs.svg",
		},
		{
			name: "NodeJS",
			image: "icons/skills/nodejs.svg",
		},
		{
			name: "ReactJS",
			image: "icons/skills/reactjs.svg",
		},
		{
			name: "SocketIO",
			image: "icons/skills/socket.io.svg",
		},
		{
			name: "Tailwind",
			image: "icons/skills/tailwind.svg",
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.title}>Skills</div>
			<div className={styles.marquee1}>
				{skills.map((item, index) => (
					<div key={index} className={styles.skill}>
						<img src={item.image} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
