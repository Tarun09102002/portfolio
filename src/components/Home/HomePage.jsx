import styles from "./HomePage.module.scss";
import React from "react";

function HomePage() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.greeting}>
					<div className={styles.hello}>Hello, I am</div>
					<div className={styles.name}>Tarun Agrawal</div>
					<div className={styles.role}>Full Stack Web Developer</div>
				</div>
				<div className={styles.divider}></div>
			</div>
			<div className={styles.right}>
				<div className={styles.image}>
					<img src="tarun-photo-3.png" alt="Tarun Agrawal" />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
