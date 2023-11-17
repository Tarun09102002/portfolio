import { useState } from "react";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";

function Projects({ projectsRef }) {
	const projects = [
		{
			name: "Zoologram-Virtual Zoo",
			image: "projects/SIH-zoologram.png",
			description:
				"A virtual zoo where users can see hologram of animals and can interact with them.",
			projectLink: "https://youtu.be/5ozB-A7kMPs?si=262mCm_nPYT3n-YS",
			links: [
				{
					name: "Github",
					link: "https://github.com/Tarun09102002/sih-virtual-zoo",
					image: "icons/github.png",
				},
				{
					name: "Youtube",
					link: "https://youtu.be/5ozB-A7kMPs?si=262mCm_nPYT3n-YS",
					image: "icons/youtube.png",
				},
			],
			imageOrientation: "portrait",
			techStack: ["ReactJS", "NodeJS", "MongoDB", "SocketIO", "ExpressJS"],
		},
		{
			name: "Calendar Application - Scheduler App",
			image: "projects/Calendar-app.png",
			description:
				"A calendar application where users can schedule their meetings and events and collaborate with each other.",
			projectLink: "https://scheduler-calendar-app.netlify.app/",
			links: [
				{
					name: "Github",
					link: "https://github.com/Tarun09102002/scheduler-project-client",
					image: "icons/github.png",
				},
			],
			imageOrientation: "landscape",
			techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
		},
		{
			name: "Automate: Rickshaw Pooling App",
			image: "projects/Automate.png",
			description:
				"An app where users can book rickshaw rides and can share their rides with other users with chat and call interface.",
			projectLink: "https://automate-pooling.netlify.app/login",
			links: [
				{
					name: "Github",
					link: "https://github.com/Tarun09102002/automate-client",
					image: "icons/github.png",
				},
			],
			imageOrientation: "landscape",
			techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "MapBox"],
		},
	];

	return (
		<div className={styles.container} ref={projectsRef}>
			<div
				className={styles.content}
				initial={{ marginRight: "100vw" }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				whileInView={{ marginRight: 0 }}
			>
				{/* <div className={styles.content}> */}
				<div className={styles.heading}>Projects</div>
				<div className={styles.projectContainer}>
					{projects.map((project, index) => (
						<motion.div
							className={styles.project}
							initial={{ marginRight: index % 2 === 0 ? "100vw" : "-100vw" }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, type: "spring", stiffness: 50 }}
							whileInView={{ marginRight: 0 }}
							key={index}
						>
							<div className={styles.projectContent}>
								<h1>
									<a href={project.projectLink}>{project.name}</a>
								</h1>
								<div className={styles.projectDescription}>
									{project.description}
								</div>
								<div className={styles.projectDescription}>
									<b
										style={{
											marginRight: "10px",
										}}
									>
										Tech Stack:{" "}
									</b>
									{project.techStack.join(",  ")}
								</div>
								<div className={styles.links}>
									{project.links.map((link, ind) => (
										<a href={link.link} key={ind}>
											<img src={link.image} alt={link.name} />
										</a>
									))}
								</div>
							</div>
							<div className={styles.projectImageContainer}>
								<a
									className={styles.projectImage}
									style={{
										width:
											project.imageOrientation === "portrait"
												? "220px"
												: "550px",
									}}
									href={project.projectLink}
								>
									<img src={project.image} alt={project.name} />
								</a>
							</div>
						</motion.div>
					))}
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

export default Projects;
