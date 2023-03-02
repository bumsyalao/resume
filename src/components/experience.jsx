import React from "react";
import ReactDOM from "react-dom";

const Experience = () => {
	return (
		<section className="section">
			<h2>Relevant Experience</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Senior Fullstack Engineer
						<small className="date">Sept 2020 - Present</small>
					</h3>
					<h5>Tradeling</h5>
					<p>
						<ul>
							<li>Tradeling is the leading B2B E-commerce Marketplace in the MENA region with approximately 10k daily users.</li>
							<li>
								Designed and implemented a full-fledged back-office application architecture and code
								that is highly scalable, available, maintainable, and performant
								to provide data and functionality to support Tradeling customers,
								manage orders, review and approve products, set up campaigns, create promotions, configure tags,
								manage commissions per user, generate invoices, manage customers information, backoffice user management.
							</li>
							<li>
								Built backend and frontend web components for banners,
								carousels, cards, etc.
								Implemented google analytics tracking and impressions tracking for
								all banners to accurately capture relevant data from users' interaction.
							</li>
							<li>
								Spearheaded implementation of Headless CMS a key tool for the business and marketing team
								which provides a more friendly to use interface that enables the team to create and deploy web pages faster.
							</li>
							<li>Worked with AWS services such as EC2, S3, and CloudFront</li>
							<li>Implemented automated testing and deployment processes</li>
							<li>Participated in code reviews and mentored junior developers</li>
							<li>Troubleshooting and resolving major and minor bugs</li>
						</ul>
					</p>
					<div className="tags" id="description-1">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">React</span>
						<span className="tag-item">NextJS</span>
						<span className="tag-item">ExpressJS</span>
						<span className="tag-item">PostgresSQL</span>
						<span className="tag-item">MongoDB</span>
						<div className="tags">
							<span className="tag-item">AWS</span>
							<span className="tag-item">Docker</span>
							<span className="tag-item">CI/CD</span>
							<span className="tag-item">HTML</span>
							<span className="tag-item">CSS</span>
							<span className="tag-item">Microservices</span>
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
						Software Developer
						<small className="date">Dec 2018 </small>
					</h3>
					<h5>IBM (contractor)</h5>

					<p>
						<ul>
							<li>
								TAMM Project In Abu Dhabi is an
								impactful project aiming to revolutionise how citizens of Abu
								Dhabi interact with government services.
							</li>
							<li>Collaborated with cross-functional teams to deliver high-quality software</li>
							<li>
								Developed highly optimised frontend visualisation of investment
								data using charts, graphs, interactive investment maps and
								business calculators for potential business investors.
							</li>
							<li>
								Worked with RESTful APIs, integrated third-party services, and also ensured cross-browser
								support, while following <strong>agile</strong> software
								programming practices.
							</li>
							<li>Wrote numerous unit and API tests and fixed major and minor bugs that may hinder user satisfaction.</li>
							<li>Receive and provide feedback in code reviews and pair programming, juggling concerns like robustness, maintainability,
								development-speed, performance, security and architecture</li>
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
							<span className="tag-item">Distributed Systems</span>
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
						Software Developer
						<small className="date">Aug 2017</small>
					</h3>
					<h5>Andela Nigeria</h5>

					<p>
						<ul>
							<li>Andela is an organization that cultivates IT talent in Africa and provides leading global technology companies with access to a high-skilled resource pool.</li>
							<li>
								Developed an online publishing platform, where users can share
								and manage articles.
							</li>
							<li>
								Developed a complex messaging web application, to enable
								communication and collaboration amongst teams using Node.js, Express.js, and ReactJS.
							</li>
							<li>Wrote numerous unit and API tests.</li>
							<li>Contributed to Reaction commerce open source.</li>
							<li>Participated in Andela coding Bootcamp and numerous hackertons</li>
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
						<span className="tag-item">CircleCI</span>
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
						Systems Engineer (Electronic Payment Solutions)
						<small className="date">Jan 2016</small>
					</h3>
					<h5>Interswitch Nigeria</h5>
					<p>
						<ul>
							<li>
								Interswitch is an Africa-focused integrated digital payments
								facilitating the electronic circulation of money between individuals and organisations on a timely and consistent basis.
								Responsible for continous delivery/continous deployment of payment across multiple sites of approximately 13million customers.
							</li>
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
						<span className="tag-item">FinTech</span>
						<span className="tag-item">Load balancing</span>
						<span className="tag-item">System design</span>
						<span className="tag-item">Electronic Funds Transfer</span>
						<span className="tag-item">MSSQL</span>
						<a
							href="https://www.interswitchgroup.com/articles/GirlsWhoCode.html"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> Interswitch.com
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Experience;
