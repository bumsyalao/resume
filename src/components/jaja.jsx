import React from "react";
import Experience from "./experience.jsx";
import Education from "./education.jsx";
import Projects from "./projects.jsx";
import Awards from "./awards.jsx";
import Skills from "./skills.jsx";

const STORE_KEY = "USE_DARK_MODE";

class Resume extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.state = {
			checkedInput: false,
		};
		this.onStart();
	}

	onStart = () => {
		if (typeof localStorage !== "undefined") {
			const checked = localStorage.getItem(STORE_KEY) || false;
			this.setState({ checkedInput: JSON.parse(checked) });
		}
	};

	handleToggle = () => {
		if (typeof localStorage !== "undefined") {
			const checkedInput = !this.state.checkedInput;
			localStorage.setItem(STORE_KEY, checkedInput);
			this.setState({ checkedInput });
		}
	};

	onPlay = () => {
		const node = this.myRef.current;
		node.play();
	};

	render() {
		const phone = "+971501507152";
		return (
			<div
				id="wrapper"
				className={this.state.checkedInput ? "dark-theme" : "default-theme"}
			>
				<section className="controls">
					<div className="toggle-theme">
						<i className="mdi mdi-24px mdi-white-balance-sunny" />
						<label className="switch">
							<input
								checked={this.state.checkedInput}
								onChange={this.handleToggle}
								type="checkbox"
							/>
							<span className="slider" />
						</label>
						<i className="mdi mdi-24px mdi-weather-night" />
					</div>
				</section>
				<main className="sheet">
					<section className="flex head">
						<div className="flex-item heading-item">
							{/* <img
								className="profile-image"
								src="https://res.cloudinary.com/dcpfdxsly/image/upload/v1657062712/profile-picture_sslvt0.jpg"
								alt="Avatar"
							/> */}
							<span
								style={{
									fontSize: "1.9rem",
									fontWeight: 700,
								}}
							>
								<a
									className="name-link"
									href="https://bumsyalao.github.io/resume/"
								>
									Bunmi Alao
								</a>
							</span>
							<p className="translation-text">/buːmi/</p>
							<button className="translation-btn" onClick={this.onPlay}>
								<audio ref={this.myRef} id="myAudio">
									<source
										src="https://res.cloudinary.com/dcpfdxsly/video/upload/v1588351970/Bunmi_sptkgn.m4a"
										type="audio/ogg"
									/>
									<source
										src="https://res.cloudinary.com/dcpfdxsly/video/upload/v1588351970/Bunmi_sptkgn.m4a"
										type="audio/mpeg"
									/>
									Your browser does not support the audio element.
								</audio>
								<span className="material-icons">volume_up</span>
							</button>
						</div>
						<div className="flex-item">
							<a
								className="download-btn"
								href="./resume.pdf"
								download="Bunmi_Alao_Resume.pdf"
							>
								<i className="mdi mdi-file-pdf" /> Download PDF
							</a>
						</div>
					</section>
					<section className="flex contact">
						<span className="flex-item">
							<a
								className="contact-item"
								href="https://bumsyalao-dev.vercel.app/"
								target="_blank"
							>
								<i className="mdi mdi-earth no-print" />
								&nbsp; https://bumsyalao.dev/
							</a>
						</span>
						<span className="flex-item">
							<a
								className="contact-item"
								href="mailto:bumsyalao@gmail.com"
								target="_blank"
							>
								<i className="mdi mdi-gmail no-print" />
								&nbsp;bumsyalao@gmail.com
							</a>
						</span>
						<span className="flex-item">
							<a
								className="contact-item"
								href="https://github.com/bumsyalao"
								target="_blank"
							>
								<i className="mdi mdi-github-circle no-print" />
								&nbsp; https://github.com/bumsyalao
							</a>
						</span>
						<span className="flex-item">
							<a
								className="contact-item"
								href="https://linkedin.com/in/bumsyalao"
								target="_blank"
							>
								<i className="mdi mdi-linkedin-box no-print" />
								&nbsp;https://linkedin.com/in/bumsyalao
							</a>
						</span>
						<span className="flex-item no-print">
							<a
								className="contact-item"
								href="https://medium.com/@bumsyalao12"
								target="_blank"
							>
								<i className="mdi mdi-newspaper no-print" />
								&nbsp;/medium
							</a>
						</span>
						<span className="flex-item">
							<a href={`tel:${phone}`}>
								<i className="mdi mdi-phone no-print" />
								&nbsp;{phone}
							</a>
						</span>
					</section>
					<section className="pitch">
						<p>
							Product-driven Full Stack Engineer with 8+ years of experience designing, 
							building, and scaling data-intensive SaaS and AI-powered platforms across
							e-commerce, cybersecurity, and government sectors. Skilled in Node.js, 
							NestJS, React, Next.js, and MongoDB, with strong proficiency in cloud 
							infrastructure (AWS, GCP, Docker, Kubernetes).
							Known for turning product requirements into seamless technical solutions, optimizing performance, 
							and driving full lifecycle delivery from concept to deployment. Passionate about building 
							sustainable, scalable, and high-performance systems in fast-paced environments.
						</p>
					</section>
					<Skills />
					<Experience />
					<Education />
					<Projects />
					<Awards />
				</main>
			</div>
		);
	}
}

export default Resume;
