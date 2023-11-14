import styles from "./HomePage.module.scss";
import React from "react";
import { motion } from "framer-motion";

function HomePage() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<motion.div
					className={styles.greeting}
					whileHover={"hover"}
					transition={{
						duration: 0.5,
						ease: "easeInOut",
					}}
					variants={{
						hover: {
							scale: 1.2,
							transition: {
								duration: 0.5,
								ease: "easeInOut",
							},
						},
					}}
				>
					<div className={styles.hello}>Hello, I am</div>
					<motion.div
						className={styles.name}
						animate={{
							rotate: 360,
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
						// variants={{
						// 	hover: {
						// 		scale: 1.1,
						// 		rotate: 180,
						// 		transition: {
						// 			duration: 0.5,
						// 			ease: "easeInOut",
						// 		},
						// 	},
						// }}
						// whileHover="hover"
					>
						Tarun Agrawal
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
					transition={{ duration: 1 }}
					whileHover={"hover"}
					variants={{
						hover: {
							scale: 1.1,
							transition: {
								duration: 1,
								ease: "easeInOut",
							},
							x: 20,
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
