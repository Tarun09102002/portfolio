import { useState } from "react";
import styles from "./Experience.module.scss";
import { useParams } from "react-router-dom";

function Experience() {
	const [activeIndex, setActiveIndex] = useState(null);
	const tag = useParams().tag;

	console.log(useParams());
	const experience = [
		{
			company: "Deutsche Bank",
			role: "Full Stack Developer",
			from: "May 2023",
			to: "July 2023",
			description: [
				"Worked on cutting-edge projects involving Angular and Spring Boot technologies, developing robust web applications and user interfaces, and creating powerful server-side applications.",
				"Engaged with a team of 20 professionals and two other interns, collaborating on real-world challenges, attending knowledge-sharing sessions, and building valuable industry connections.",
				"Transformed by the experience, enhancing technical skills, problem-solving abilities, and adaptability in a fast-paced corporate setting. Gained insights into financial technology and learned to deliver high-quality solutions under tight deadlines.",
			],
		},
		{
			company: "WebSkyne",
			role: "Full Stack Developer",
			from: "Jan 2023",
			to: "April 2023",
			description: [
				"In Webskyne's startup culture, I honed diverse skills, mastering client interactions and project management, thriving in dynamic development environments.",
				"Mastered Nest.js for creating robust server-side apps and refined skills in building optimized client-side applications with Next.js in a three-month period",
				"During the internship, I became proficient in Git, excelling in version control and enabling smooth collaboration via code reviews, merge requests, and branch management for an efficient workflow.",
			],
		},
	];
	const handleClick = (index) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			console.log(index);
			setActiveIndex(index);
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.heading}>Experience</div>
				<div className={styles.experienceContainer}>
					{experience.map((exp, index) => (
						<div className={styles.experience}>
							<div
								className={
									activeIndex === index ? styles.previewActive : styles.preview
								}
								onClick={() => handleClick(index)}
							>
								<div className={styles.company}>{exp.company}</div>
								<div className={styles.role}>{exp.role}</div>
							</div>
							{
								<div
									className={styles.details}
									style={{
										maxHeight: activeIndex === index ? "1000px" : "0px",
										transition: "max-height 0.5s ease-in-out",
										overflow: "hidden",
									}}
								>
									<div className={styles.duration}>
										<div className={styles.month}>{exp.from}</div>-
										<div className={styles.month}>{exp.to}</div>
									</div>
									<div className={styles.description}>
										<ul>
											{exp.description.map((desc) => (
												<li>{desc}</li>
											))}
										</ul>
									</div>
								</div>
							}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Experience;
