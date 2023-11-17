import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";

function Navbar({ scrollIntoView }) {
	const [expand, setExpand] = useState(false);
	const [navStyle, setNavStyle] = useState("normal");
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
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 60) {
				setNavStyle("scrolled");
			} else {
				setNavStyle("normal");
			}
		});
	}, []);

	return (
		<div className={styles.navbarContainer}>
			<div
				className={styles.navbar}
				style={{
					backgroundColor:
						navStyle === "scrolled" ? "transparent" : "rgb(30, 30, 30)",
				}}
			>
				<div className={styles.logoContainer}>
					<motion.div
						className={styles.logo}
						style={{
							borderColor: navStyle === "scrolled" ? "rgb(30,30,30)" : "white",
							color: navStyle === "scrolled" ? "rgb(30,30,30)" : "white",
						}}
					>
						T
					</motion.div>
					<motion.div
						className={styles.logoText}
						animate={{
							opacity: navStyle === "scrolled" ? 0 : 1,
						}}
					>
						Tarun Agrawal
					</motion.div>
				</div>
				{window.screen.width > 600 && navStyle === "normal" ? (
					<div className={styles.navLinks}>
						<a href="#experience" onClick={() => scrollIntoView("experience")}>
							Experience
						</a>
						<a href="#projects" onClick={() => scrollIntoView("projects")}>
							Projects
						</a>
						<a href="#skills" onClick={() => scrollIntoView("skills")}>
							Skills
						</a>
						<a href="#contact" onClick={() => scrollIntoView("contact")}>
							Contact
						</a>
					</div>
				) : (
					<motion.div
						animate={
							navStyle === "scrolled"
								? {
										padding: "10px",
										minHeight: "30px",
										width: "30px",
										backgroundColor: "rgb(30, 30, 30)",
										borderRadius: expand ? "30px" : "50%",
										scale: 1,
								  }
								: {
										padding: "0px",
										backgroundColor: "rgb(30, 30, 30)",
										scale: 1,
								  }
						}
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							right: "10px",
							top: navStyle === "scrolled" ? "10px" : "auto",
						}}
					>
						<motion.img
							src="icons/menu.png"
							alt=""
							className={styles.menuIcon}
							animate={{
								rotate: expand ? 90 : 0,
								scale: navStyle === "scrolled" ? 0.8 : 1,
							}}
							transition={{
								duration: 0.5,
								type: "spring",
								stiffness: 120,
							}}
							style={{
								marginTop: expand && navStyle === "scrolled" ? "10px" : "0",
								width: "30px",
								// height: "25px",
							}}
							onClick={() => setExpand(!expand)}
						/>
						{expand && navStyle === "scrolled" && (
							<motion.div
								style={{
									minHeight: "200px",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "start",
									gap: "10px",
									marginTop: "20px",
								}}
								transition={{
									duration: 2,
									type: "spring",
									stiffness: 120,
								}}
								initial={{ opacity: 0, y: -100 }}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{ opacity: 0, y: -100 }}
							>
								{["Experience", "Projects", "Skills", "Contact"].map(
									(item, index) => (
										<motion.div
											className={styles.menuItem}
											animate={
												{
													// rotate: 90,
												}
											}
											style={{
												width: "90px",
												height: window.screen.width < 600 ? "100px" : "120px",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												zIndex: 100,
											}}
											transition={{
												duration: 0.5,
											}}
											key={index}
										>
											<motion.a
												href={`#${item.toLowerCase()}`}
												onClick={() => {
													scrollIntoView(item.toLowerCase());
													setExpand(false);
												}}
												style={{
													color: "white",
													fontSize:
														window.screen.width < 600 ? "1rem" : "1.2rem",
													textDecoration: "none",
												}}
												animate={{
													rotate: 90,
												}}
												transition={{
													duration: 0.5,
													ease: "easeInOut",
												}}
												whileHover={{
													scale: 1.1,
													transition: {
														duration: 0.4,
														ease: "easeInOut",
													},
												}}
											>
												{item}
											</motion.a>
										</motion.div>
									)
								)}
							</motion.div>
						)}
					</motion.div>
				)}
			</div>
			{expand && navStyle === "normal" && window.screen.width < 600 && (
				<motion.div className={styles.menuContainer}>
					<motion.div
						className={styles.menu}
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{["Experience", "Projects", "Skills", "Contact"].map(
							(item, index) => (
								<motion.div className={styles.menuItem} key={index}>
									<a
										href={`#${item.toLowerCase()}`}
										onClick={() => {
											scrollIntoView(item.toLowerCase());
											setExpand(false);
										}}
									>
										{item}
									</a>
								</motion.div>
							)
						)}
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}

export default Navbar;
