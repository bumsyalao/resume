import React from "react";
import ReactDOM from "react-dom";

const Experience = () => {
	return (
		<section className="section">
			<h2>Relevant Experience</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Senior Fullstack Engineer at Tradeling{" "}
						<small className="date">Sept 2020 - Present</small>
					</h3>
					<p>
						<ul>
							<li>
								Managed a full fledged back office application for Tradeling a
								leading B2B market place in the MENA region.
							</li>
							<li>
								Designing and implementing application architectures and code
								that is highly scalable, available, maintainable, and performant
								to provide data and functionality to support tradeling cutomers,
								configure orders, products, campaigns, promotions, etc.
							</li>
							<li>Code reviews.</li>
							<li>Handled migrations from mongoDB to postgreSQL.</li>
							<li>Wrote numerous unit and API tests.</li>
						</ul>
					</p>
					<div className="tags" id="description-1">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">PostgresSQL</span>
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">React</span>
						<div className="tags">
							<span className="tag-item">AWS</span>
							<span className="tag-item">Jest</span>
							<span className="tag-item">Express</span>
							<span className="tag-item">TDD</span>
						</div>
						<div className="tags">
							<a
								href="https://www.tradeling.com/"
								target="_blank"
								className="tag-item"
							>
								<i className="mdi mdi-earth" /> Tradeling
							</a>
						</div>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Software Developer (contractor) at IBM{" "}
						<small className="date">Dec 2018 </small>
					</h3>
					<p>
						<ul>
							<li>
								I worked on the TAMM Project here In Abu Dhabi. It is an
								impactful project aiming to revolutionise how citizens of Abu
								Dhabi interact with government services.
							</li>
							<li>
								Developed highly optimised frontend visualisation of investment
								data using charts, graphs, interactive investment maps and
								business calculators for potential business investors.
							</li>
							<li>Wrote numerous unit and API tests.</li>
							<li>Pair programming.</li>
							<li>
								Handled API integrations, and also ensured cross-browser
								support, while following <strong>agile</strong> software
								programming practices.
							</li>
						</ul>
					</p>
					<div className="tags" id="description-2">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">React</span>
						<span className="tag-item">GraphQL</span>
						<span className="tag-item">PostgresSQL</span>
						<div className="tags">
							<span className="tag-item">SCSS</span>
							<span className="tag-item">TDD</span>
							<span className="tag-item">Jest</span>
							<span className="tag-item">Agile</span>
							<span className="tag-item">Microservices</span>
							<span className="tag-item">Esri Maps</span>
						</div>
						<div className="tags">
							<a
								href="https://www.tamm.abudhabi/"
								target="_blank"
								className="tag-item"
							>
								<i className="mdi mdi-earth" /> tamm.abudhabi
							</a>
						</div>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Software Developer at Andela NG{" "}
						<small className="date">Aug 2017</small>
					</h3>
					<p>
						<ul>
							<li>
								Developed an online publishing platform, where users can share
								and manage articles.
							</li>
							<li>
								Developed a complex messaging web application, to enable
								communication and collaboration amongst teams.
							</li>
							<li>Wrote numerous unit and API tests.</li>
							<li>Contributed to Reaction commerce open source.</li>
							<li>
								Contributed to Cards For Humanity, a fast-paced online version
								of the popular card game, Cards Against Humanity.
							</li>
						</ul>
					</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">TDD</span>
						<span className="tag-item">Javascript ES6</span>
					</div>
					<div className="tags" id="description-3">
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">PostgresSQL</span>
						<span className="tag-item">Webpack</span>
						<span className="tag-item">Heroku</span>
						<a
							href="https://www.andela.com/"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> andela.com
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						EFT Specialist at Interswitch NG
						<small className="date">Jan 2016</small>
					</h3>
					<p>
						<ul>
							<li>
								Full FEP Deployment, Upgrades, Maintenance & Support of core
								banking systems (Postilion, Postcard, Postilion Office).
							</li>
							<li>HSM (Hardware Security Module) Deployment.</li>
							<li>
								Channel Enhancement & Certification (ATM, POS, WEB, and Mobile).
							</li>
							<li>
								Integration of external systems and networks. Examples:
								Integration to Processors/Switches (MasterCard, VISA, VERVE).
							</li>
							<li>
								Installing, managing, upgrading and administering Microsoft SQL
								databases
							</li>
						</ul>
					</p>
					<div className="tags" id="description-4">
						<span className="tag-item">Postilion</span>
						<span className="tag-item">Load balancing</span>
						<span className="tag-item">System design</span>
						<span className="tag-item">EFT</span>
						<span className="tag-item">MSSQL</span>
						<a
							href="https://www.interswitchgroup.com/articles/GirlsWhoCode.html"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> interswitch.com
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Experience;
