import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
	return (
		<div className={styles.navbar}>
			<div className={styles.logoContainer}>
				<div className={styles.logo}>T</div>
				<div className={styles.logoText}>Tarun Agrawal</div>
			</div>
			<div className={styles.navLinks}>
				<a href="#experience">Experience</a>
				<a href="#projects">Projects</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	);
}

export default Navbar;
