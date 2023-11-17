import React from "react";
import styles from "./Skills.module.scss";
import { motion } from "framer-motion";

function Skills({ skillsRef }) {
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
			name: "NextJS",
			image: "icons/skills/nextjs.svg",
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
		<div className={styles.container} ref={skillsRef}>
			<div className={styles.title}>Skills</div>
			<div className={styles.skillsContainer}>
				{skills.map((item, index) => (
					<div key={index} className={styles.skill}>
						<motion.img
							src={item.image}
							alt=""
							transition={{
								duration: 0.4,
								ease: "easeInOut",
							}}
							whileHover={{
								scale: 1.1,
								transition: {
									duration: 0.4,
									ease: "easeInOut",
								},
							}}
							whileTap={{ scale: 0.9 }}
						/>
						<div className={styles.skillName}>{item.name}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
