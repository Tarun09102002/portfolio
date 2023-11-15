import { useState } from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

function Navbar() {
	const [expand, setExpand] = useState(false);
	const menuVariants = {
		hidden: {
			opacity: 0,
			y: "-100vw",
			transition: {
				type: "spring",
			},
		},
		visible: {
			opacity: 0.9,
			y: 0,
			transition: {
				duration: 0.2,
				type: "spring",
				stiffness: 100,
				when: "beforeChildren",
				staggerChildren: 0.4,
			},
		},
	};
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbar}>
				<div className={styles.logoContainer}>
					<div className={styles.logo}>T</div>
					<div className={styles.logoText}>Tarun Agrawal</div>
				</div>
				{window.screen.width > 600 ? (
					<div className={styles.navLinks}>
						<a href="#experience">Experience</a>
						<a href="#projects">Projects</a>
						<a href="#contact">Contact</a>
					</div>
				) : (
					<motion.img
						src="icons/menu.png"
						alt=""
						className={styles.menuIcon}
						animate={{
							rotate: expand ? 90 : 0,
						}}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 120,
						}}
						onClick={() => setExpand(!expand)}
					/>
				)}
			</div>
			{expand && (
				<motion.div className={styles.menuContainer}>
					<motion.div
						className={styles.menu}
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{["Experience", "Project", "Contact"].map((item, index) => (
							<motion.div className={styles.menuItem} key={index}>
								<a href={`#${item.toLowerCase()}`}>{item}</a>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}

export default Navbar;
