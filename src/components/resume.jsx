import React from "react";
import ReactDOM from "react-dom";
import Experience from "./experience.jsx";
import Education from "./education.jsx";
import Projects from "./projects.jsx";
import Awards from "./awards.jsx";

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
		const phone = "+2349097138779";
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
									Omoyele Oladapo James
								</a>
							</span>
							{/* <p className="translation-text">/yeːle/</p>
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
							</button> */}
						</div>
						<div className="flex-item">
							<a
								className="download-btn"
								href="./resume.pdf"
								download="Omoyele_Resume.pdf"
							>
								<i className="mdi mdi-file-pdf" /> Download PDF
							</a>
						</div>
					</section>
					<section className="flex contact">
						{/* <span className="flex-item">
							<a
								className="contact-item"
								href="https://master.d1swm8gje57dpg.amplifyapp.com"
								target="_blank"
							>
								<i className="mdi mdi-earth" />
								&nbsp;http://bumsyalao.dev/
							</a>
						</span> */}
						<span className="flex-item">
							<a
								className="contact-item"
								href="mailto:yelejms@yahoo.com, m"
								target="_blank"
							>
								<i className="mdi mdi-gmail" />
								&nbsp;yelejms@yahoo.com, 
							</a>
						</span>
						<span className="flex-item">
							<a
								className="contact-item"
								href="https://linkedin.com/in/omoyele-james-602482191"
								target="_blank"
							>
								<i className="mdi mdi-linkedin-box" />
								&nbsp;/omoyele-james
							</a>
						</span>
						{/* <span className="flex-item">
							<a
								className="contact-item"
								href="https://medium.com/@bumsyalao12"
								target="_blank"
							>
								<i className="mdi mdi-newspaper" />
								&nbsp;/medium
							</a>
						</span> */}
						<span className="flex-item">
							<a href={`tel:${phone}`}>
								<i className="mdi mdi-phone" />
								&nbsp;{phone}
							</a>
						</span>
					</section>
					<section className="pitch">
						<p>
						As a dedicated professional with a Master's degree in Animal Nutrition and extensive experience in the nutrition industry, I bring a robust blend of scientific expertise and product management skills. My journey from working as a nutritionist at Spectra Farms Ltd to my current role as a product manager at Skretting has equipped me with a comprehensive understanding of the animal health and nutrition sector. I excel in strategic development, market analysis, and pricing strategy, ensuring that our products meet market demands and achieve financial targets. I am proficient in translating research data into actionable insights and creating effective marketing communication plans. My strong problem-solving abilities and commitment to integrity and teamwork make me a reliable and adaptable professional.
						</p>
					</section>
					<section className="section section-skills">
					<div className="flex">
					<div className="tags">
						<span className="tag-item">MS Office Suite (Word, Excel and PowerPoint)</span>
						<span className="tag-item">Minitab</span>
						<span className="tag-item">GIS</span>
						<span className="tag-item">Bestmix</span>
						<span className="tag-item">MiniTab</span>
						<span className="tag-item">Problem solving</span>
						<span className="tag-item">Communication</span>
						<span className="tag-item">Attention to Detail</span>
						<span className="tag-item">Prioritization</span>
						<span className="tag-item">Financial management </span>
					</div>
					</div>
					</section>
					<Experience />
					<Education />
					{/* <Projects /> */}
					<Awards />
				</main>
			</div>
		);
	}
}

export default Resume;
