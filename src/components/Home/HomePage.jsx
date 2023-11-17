import styles from "./HomePage.module.scss";
import React from "react";
import { motion } from "framer-motion";

function HomePage() {
	const TextVariants = {
		offscreen: {
			opacity: 1,
		},
		onscreen: {
			opacity: 1,
			scale: 1.2,
		},
		exit: {
			opacity: 1,
		},
	};
	const name = "Tarun Agrawal";
	return (
		<div className={styles.container}>
			<div
				className={styles.left}
				style={{
					// backgroundImage:
					// 	window.screen.width < 600
					// 		? "url('background-homepage.jpg')"
					// 		: "none",
					backgroundColor:
						window.screen.width < "600px" ? "black" : "rgb(228, 228, 228)",
				}}
			>
				<motion.div className={styles.greeting}>
					<div className={styles.hello}>Hello, I am</div>
					<motion.div
						className={styles.name}
						animate={
							{
								// scale: [1, 1.2, 1],
							}
						}
						// transition={{
						// 	duration: 1,
						// 	ease: "easeInOut",
						// }}
						transition={{ staggerChildren: 2 }}
					>
						{name.split("").map((letter, index) => (
							<motion.span
								animate={{
									scale: [1, 1.2, 1],
									opacity: 1,
									y: 0,
								}}
								transition={{
									type: "spring",
									stiffness: 100,
									duration: 0.05,
									delay: index * 0.1,
									ease: "easeInOut",
								}}
								key={index}
							>
								{letter}
							</motion.span>
						))}
					</motion.div>
					<div className={styles.role}>Full Stack Web Developer</div>
					<div className={styles.smlinks}>
						<a href={"https://www.linkedin.com/in/tarun-agrawal-/"}>
							<img src={"icons/linkedin.png"} alt="" />
						</a>
						<a href={"https://github.com/Tarun09102002"}>
							<img src={"icons/github.png"} alt="" />
						</a>
						<a href={"https://www.instagram.com/_.tarunagrawal._"}>
							<img src={"icons/instagram.png"} alt="" />
						</a>
					</div>
				</motion.div>
				<div className={styles.divider}></div>
				{/* <div className={styles.backgroundImage}> */}
				<img
					src="background-homepage.jpg"
					className={styles.backgroundImage}
					alt=""
				/>
				{/* </div> */}
			</div>
			<div className={styles.right}>
				<motion.div
					className={styles.image}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7 }}
					whileHover={"hover"}
					variants={{
						hover: {
							scale: 1.1,
							transition: {
								duration: 0.4,
								ease: "easeInOut",
							},
						},
					}}
				>
					<img src="tarun-photo-3.png" alt="Tarun Agrawal" />
				</motion.div>
			</div>
		</div>
	);
}

export default HomePage;
