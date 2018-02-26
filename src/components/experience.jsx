import React from 'react';
import ReactDOM from 'react-dom';

const Experience = () => {
	return (
		<section className="section">
			<h2>Relevant Experience</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Software Developer at Andela NG <small className="date">Aug 2017 - Feb 2018</small>
					</h3>
					<p>
						<ul>
							<li>Building Full stack application using Micro-service for frontend and backend architecture while following agile software programming practices.</li>
							<li>Contributed to Reaction commerce open source.</li>
							<li>Contributed to Cards For Humanity, a fast-paced online version of the popular card game, Cards Against Humanity.</li>
						</ul>
					</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Javascript ES6</span>
					</div>
					<div className="tags">
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">PostgresSQL</span>
						<span className="tag-item">Webpack</span>
						<span className="tag-item">Heroku</span>
						<a href="https://www.andela.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> andela.com
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						EFT Specialist at Interswitch NG<small className="date">Jan 2016 - Aug 2017</small>
					</h3>
					<p>
						<ul>
							<li>Full FEP Deployment, Upgrades, Maintenance & Support of core banking systems (Postilion, Postcard, Postilion Office).</li>
							<li>HSM (Hardware Security Module) Deployment.</li>
							<li>Channel Enhancement & Certification (ATM, POS, WEB, Mobile, EMV Certification).</li>
							<li>Integration to external systems, parties and networks. Examples include: Integration to Processors/Switches (MasterCard, VISA, VERVE).</li>
							<li>Installing, managing, upgrading and administering Microsoft SQL databases</li>
						</ul>
					</p>
					<div className="tags">
						<span className="tag-item">Postilion</span>
						<span className="tag-item">EFT</span>
						<span className="tag-item">MSSQL</span>
						<a href="https://www.interswitchgroup.com/articles/GirlsWhoCode.html" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> interswitch.com
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Intern at Niger Insurance Plc. <small className="date">Mar 2013 - Aug 2013</small>
					</h3>
					<p>
					<ul>
						<li>Worked with the IT and Network support team.</li>
						<li>Fully involved in the implementation of all major IT projects in the company, such as the deployment of new server rooms, installation and full configuration of IP Cameras and Workstations.</li>
						<li>Server and User Management, Setup and configuration of Hardware and Software in the company as well as the full implementation of Security Policies.</li>
						<li>Engaged in formal business writing, the application of project management skills and employed Microsoft office packages in delivering reports and making presentations.</li>
					</ul>
					</p>
					<div className="tags">
						<span className="tag-item">System Administration</span>
						<span className="tag-item">Troubleshooting</span>
						<span className="tag-item">Project Management</span>
						<a href="https://nigerinsurance.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> nigerinsurance.com
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Experience;
