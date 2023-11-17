import React from "react";
import styles from "./Contact.module.scss";

function Contact({ contactRef }) {
	return (
		<div ref={contactRef} className={styles.container}>
			<div className={styles.start}>
				<div className={styles.title}>Let's Work Together</div>
				<div className={styles.description}>
					I am always open to new opportunities. Feel free to contact me.
				</div>
			</div>
			<div className={styles.details}>
				<div className={styles.phone}>
					<span> +91 8104292639</span>
					<img
						src="icons/copy.png"
						alt=""
						onClick={() => {
							navigator.clipboard.writeText("+91 8104292639");
						}}
					/>
				</div>
				<div className={styles.email}>
					<span> tarunagrawal1009@gmail.com</span>
					<img
						src="icons/copy.png"
						alt=""
						onClick={() => {
							navigator.clipboard.writeText("tarunagrawal1009@gmail.com");
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact;
