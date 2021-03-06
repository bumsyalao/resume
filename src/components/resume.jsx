import React from 'react';
import ReactDOM from 'react-dom';
import Experience from './experience.jsx';
import Education from './education.jsx';
import Projects from './projects.jsx';
import Awards from './awards.jsx';

const STORE_KEY = 'USE_DARK_MODE';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      checkedInput: false
    };
    this.onStart();
  }

  onStart = () => {
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

  onPlay = () => {
    const node = this.myRef.current;
    node.play();
  }

  render() {
    const phone = '+971501507152'
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
            <div className="flex-item heading-item">
              <h1>Bunmi Alao</h1>
              <p className="translation-text">/buːmi/</p>
              <button className="translation-btn" onClick={this.onPlay}>
                <audio ref={this.myRef} id="myAudio">
                  <source src="https://res.cloudinary.com/dcpfdxsly/video/upload/v1588351970/Bunmi_sptkgn.m4a" type="audio/ogg" />
                  <source src="https://res.cloudinary.com/dcpfdxsly/video/upload/v1588351970/Bunmi_sptkgn.m4a" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <span className="material-icons">volume_up</span>
              </button>
            </div>
            <div className="flex-item">
              <a className="download-btn" href="./resume.pdf" download="Olubunmi_Ruth_Alao_Resume.pdf">
                <i className="mdi mdi-file-pdf" /> Download PDF
							</a>
            </div>
          </section>
          <section className="flex contact">
            <span className="flex-item">
              <a className="contact-item" href="https://bumsyalao.github.io/bumsyalao.me/">
                <i className="mdi mdi-earth" />
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
              <a href={`tel:${phone}`}>
                <i className="mdi mdi-phone" />
								&nbsp;{phone}
              </a>
            </span>
          </section>
          <section className="pitch">
            <p>
              Software engineer with 5 years professional experience in web application development currently based in Dubai, working mostly with <strong>JavaScript</strong>; <strong>ReactJS</strong> as frontend framework and <strong>NodeJS</strong> as backend solution. Professional with exceptional work ethic, I understand business requirements, prioritise work based on highest business value and enjoy working with teams to solve
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
