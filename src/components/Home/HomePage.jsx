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
			<div className={styles.left}>
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
								// initial={{
								// 	scale: 1,
								// 	opacity: 1,
								// 	y: 10,
								// }}
								animate={{
									scale: [1, 1.2, 1],
									opacity: 1,
									y: 0,
								}}
								// exit="exit"
								// variants={TextVariants}
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
				</motion.div>
				<div className={styles.divider}></div>
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
