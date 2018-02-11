import React from 'react';
import ReactDOM from 'react-dom';
import Experience from './experience.jsx';
import Education from './education.jsx';
import Projects from './projects.jsx';
import Awards from './awards.jsx';

const STORE_KEY = 'USE_DARK_MODE';

class Resume extends React.Component {
	state = {
		checkedInput: false
	};

	componentWillMount() {
		if (typeof localStorage !== 'undefined') {
			const checked = localStorage.getItem(STORE_KEY) || false;
			this.setState({ checkedInput: JSON.parse(checked) });
		}
	}

	handleToggle = () => {
		if (typeof localStorage !== 'undefined') {
			const checkedInput = !this.state.checkedInput;
			localStorage.setItem(STORE_KEY, checkedInput);
			this.setState({ checkedInput });
		}
	};

	render() {
		return (
			<div id="wrapper" className={this.state.checkedInput ? 'dark-theme' : 'default-theme'}>
				<section className="controls">
					<div className="toggle-theme">
						<i className="mdi mdi-24px mdi-white-balance-sunny" />
						<label className="switch">
							<input checked={this.state.checkedInput} onChange={this.handleToggle} type="checkbox" />
							<span className="slider" />
						</label>
						<i className="mdi mdi-24px mdi-weather-night" />
					</div>
				</section>
				<main className="sheet">
					<section className="flex head">
						<div className="flex-item">
							<h1>Olubunmi Ruth Alao</h1>
						</div>
						<div className="flex-item">
							<a className="download-btn" href="./resume.pdf" download="Olubunmi_Ruth_Alao_Resume.pdf">
								<i className="mdi mdi-file-pdf" /> Download PDF
							</a>
						</div>
					</section>
					<section className="flex contact">
						<span className="flex-item">
							<a className="contact-item" href="http://bumsyalao.me/">
								<i className="mdi mdi-earth"/>
								&nbsp;http://bumsyalao.me/
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="mailto:bumsyalao@gmail.com">
								<i className="mdi mdi-gmail" />
								&nbsp;bumsyalao@gmail.com
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="https://github.com/bumsyalao">
								<i className="mdi mdi-github-circle" />
								&nbsp;/bumsyalao
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="https://ng.linkedin.com/in/bumsyalao">
								<i className="mdi mdi-linkedin-box" />
								&nbsp;/bumsyalao
							</a>
						</span>
						<span className="flex-item">
								<i className="mdi mdi-phone" />
								&nbsp;+2349082091930
						</span>
					</section>
					<section className="pitch">
						<p>
							Passionate about learning and building stuff for the web. Able to understand business requirements, prioritise work based on highest business value and work with teams to solve
							problems.
						</p>
					</section>
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
