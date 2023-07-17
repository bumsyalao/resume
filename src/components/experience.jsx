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
								Accomplished the design and implementation of a highly scalable, maintainable, and performant back-office application
								architecture and code that provided data and functionality to support Tradeling customers, manage orders, review and
								approve products, set up campaigns, create promotions, configure tags, manage commissions per user, generate invoices,
								and perform back-office user management, as measured by it's successful use in enhancing
								operational efficiency and customer satisfaction.
							</li>
							<li> Developed frontend web components such as banners, carousels, and cards. Improved the performance of the frontend
								application by optimizing the database design, reducing API response time, and minimizing server load. This led to a
								substantial enhancement in page load speed and user experience. Implemented analytics and impressions tracking for all
								banners to collect accurate user interaction data and help guide optimization strategies.
							</li>
							<li>
								Successfully executed migrations from non-relational MongoDB to relational PostgreSQL database,
								ensured the seamless transfer of data and maintenance of data integrity.
							</li>
							<li>
								Led the implementation of Headless CMS, Strapi, as a key tool for the business and marketing team,
								providing a more user-friendly interface that facilitates the creation and deployment of web pages in a faster and more efficient manner.
							</li>
							<li>Managed AWS services including EC2, S3, CloudFront, and other cloud services to effectively host,
								scale and maintain the application, ensuring a highly available and reliable platform.</li>
							<li>
								Established automated testing and deployment processes, resulting in increased efficiency,
								faster turnaround times, and improved overall software quality.</li>
							<li>Provided guidance and mentorship to junior developers during onboarding, fostering a collaborative and supportive
								team environment while ensuring successful integration and professional growth for new team members.</li>
							<li>Conducted thorough code reviews for fellow developers, offering constructive feedback and guidance
								to promote adherence to best practices and maintain high code quality standards.</li>
						</ul>
					</p>
					<div className="tags" id="description-1">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">React</span>
						<span className="tag-item">NextJS</span>
						<span className="tag-item">Redux/Context API</span>
						<span className="tag-item">PostgreSQL</span>

						<div className="tags">
							<span className="tag-item">AWS</span>
							<span className="tag-item">Docker</span>
							<span className="tag-item">CI/CD</span>
							<span className="tag-item">HTML</span>
							<span className="tag-item">CSS/TailwindCSS</span>
							<span className="tag-item">Microservices</span>
						</div>
						<div className="tags">
							<span className="tag-item">Redis</span>
							<span className="tag-item">DynamoDB</span>
							<span className="tag-item">WebSocket</span>
							<span className="tag-item">Kubernetes</span>
							<span className="tag-item">System design</span>
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
							<li>Worked closely with teams from different departments to ensure timely delivery
								of software products that meet quality standards.</li>
							<li>
								Developed robust business calculators for prospective investors, integrating multiple APIs to provide accurate estimate calculations.</li>
							<li>Incorporated third-party tools and middleware, as well as internally developed applications for web
								browsers and mobile devices by building responsive web application UIs to enhance user experience and increase accessibility.</li>
							<li>
								Created an optimized frontend visualization of investment data by using charts,
								graphs, and interactive maps, giving users multiple options to view data based
								on their preferences and enabling them to make informed business decisions.</li>
							<li>
								Improved the frontend application's performance by optimizing database design, reducing API response time, and minimizing server load.</li>
							<li>
								Implemented testing processes, designed strategies, wrote test cases and incorporated automated tests
								into CI/CD pipeline to ensure the efficiency, fault tolerance, reliability, and high availability
								of the system, and to facilitate easy collaboration among team members.
							</li>
							<li>Created comprehensive documentation for project components, including technical specifications, user manuals,
								and API references, to ensure clear understanding and ease of use for both technical and non-technical audiences.</li>
							<li>
								Implemented robust security measures to safeguard sensitive data and ensure the privacy of users.</li>
							<li>Resolved major and minor bugs in the codebase to enhance user satisfaction, improve application performance,
								and mitigate potential vulnerabilities.</li>
							<li>Collaborate with team members in code reviews and pair programming, addressing concerns related to
								robustness, maintainability, development speed, performance, security, and architecture to improve the quality of the codebase.</li>
						</ul>
					</p>
					<div className="tags" id="description-2">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">React</span>
						<span className="tag-item">GraphQL</span>
						<span className="tag-item">PostgreSQL</span>
						<span className="tag-item">MongoDB</span>

						<div className="tags">
							<span className="tag-item">SCSS</span>
							<span className="tag-item">TDD</span>
							<span className="tag-item">Jest</span>
							<span className="tag-item">Agile</span>
							<span className="tag-item">Serverless</span>
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
							<li>Andela is an organisation that cultivates IT talent in Africa and provides leading
								global technology companies with access to a high-skilled resource pool.</li>
							<li>
								Created an online publishing platform that enables users to publish, share, and manage their articles with ease.
							</li>
							<li>
								Collaborated effectively with remote teams located across various time zones to ensure seamless
								communication, efficient workflow, and timely project completion.</li>
							<li>
								Developed a messaging web application to facilitate communication and collaboration among teams.
								The application features complex functionalities and is optimized for performance and scalability.
							</li>
							<li>Made significant contributions to the open-source project Reaction Commerce,
								including fixing bugs, and improving documentation.</li>
							<li>
								Took part in Andela coding boot camp and multiple hackathons to sharpen coding skills
								and gain hands-on experience in developing innovative solutions.</li>
							<li>
								Contributed to the development of Cards For Humanity, an online version of the popular card game, Cards Against Humanity.
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
						<span className="tag-item">PostgreSQL</span>
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
								facilitating the electronic circulation of money between individuals and organizations on a timely and consistent basis.
							</li>
							<li>Spearheaded continuous delivery and deployment of payments across multiple sites, serving approximately 13 million customers.</li>
							<li>
								Led full FEP Deployment, Upgrades, Maintenance & Support of core
								banking systems like Postilion, Postcard, Postilion Office.
							</li>
							<li>Managed the successful deployment of Hardware Security Modules (HSM), ensuring robust security measures.</li>
							<li>
								Played a pivotal role in channel enhancement and certification, including ATM, POS, WEB, and Mobile,
								ensuring compliance with industry standards such as EMV certification.
							</li>
							<li>
								Orchestrated seamless integration with external systems, parties, and networks, including processors and switches like MasterCard, VISA, and VERVE.
							</li>
							<li>
								Exhibited expertise in installing, managing, upgrading, and administering Microsoft SQL databases.
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
