import React from "react";

const Experience = () => {
	return (
		<section className="section experience">
			<h2>Relevant Experience</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>Senior Fullstack Engineer <span className="date">Sept 2020 - Present</span></h3>
					<h4>Tradeling</h4>
					<ul>
						<li>Designed and implemented a scalable back-office application, increasing operational efficiency and supporting 10K daily users.</li>
						<li>Optimized frontend components (banners, carousels, cards), improving page load speed by 35% and user experience.</li>
						<li>Reduced API response time by 40% through database optimization, minimizing server load.</li>
						<li>Led migration from MongoDB to PostgreSQL, ensuring data integrity and seamless transition.</li>
						<li>Implemented Headless CMS (Strapi), reducing webpage creation time by 50% for business and marketing teams.</li>
						<li>Managed AWS services (EC2, S3, CloudFront), ensuring 99.9% uptime and platform reliability.</li>
						<li>Automated testing and CI/CD pipelines, reducing deployment time by 40% and improving software quality.</li>
						<li>Mentored 5+ junior developers, accelerating onboarding and fostering a collaborative environment.</li>
						<li>Conducted code reviews, ensuring adherence to best practices and maintaining high-quality standards.</li>
					</ul>
					<div className="tags">
						<a
							href="https://www.tradeling.com/"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> Tradeling
						</a>
					</div>
				</article>

				<article className="flex-item">
					<h3>Software Developer <span className="date">Dec 2018 - Jun 2019</span></h3>
					<h4>IBM (Contractor)</h4>
					<ul>
						<li>Led development of TAMM, a government services platform, improving citizen interactions with Abu Dhabi government services.</li>
						<li>Collaborated with cross-functional teams to ensure timely delivery of high-quality software products.</li>
						<li>Developed business calculators for prospective investors, integrating multiple APIs for accurate estimates.</li>
						<li>Built responsive web UIs for web and mobile devices, improving user experience and accessibility.</li>
						<li>Optimized frontend data visualization with charts and interactive maps, enhancing decision-making for users.</li>
						<li>Improved frontend performance by 30% through database optimization and reduced API response times.</li>
						<li>Designed and implemented testing strategies, integrating automated tests into the CI/CD pipeline for 15% higher system reliability.</li>
						<li>Created technical documentation, including user manuals and API references, for both technical and non-technical stakeholders.</li>
						<li>Implemented security protocols to protect sensitive data and ensure user privacy.</li>
						<li>Resolved bugs and enhanced application performance, resulting in increased user satisfaction and reduced vulnerabilities.</li>
					</ul>
					<div className="tags">
						<a
							href="https://www.tamm.abudhabi/"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> tamm.abudhabi
						</a>
					</div>
				</article>
			</div>
			<div className="flex">

				<article className="flex-item">
					<h3>Software Developer <span className="date">Aug 2017 - Feb 2018</span></h3>
					<h4>Andela Nigeria</h4>
					<ul>
						<li>Andela is an organisation that cultivates IT talent in Africa and provides leading global technology companies with access to a high-skilled resource pool.</li>
						<li>Developed an online publishing platform enabling users to publish, share, and manage articles effortlessly.</li>
						<li>Collaborated with remote teams across time zones, ensuring smooth communication and on-time project delivery.</li>
						<li>Built a messaging web application optimized for performance and scalability, facilitating team communication.</li>
						<li>Contributed to the open-source project Reaction Commerce by fixing bugs and improving documentation.</li>
						<li>Participated in Andela boot camp and hackathons, enhancing coding skills and developing innovative solutions.</li>
						<li>Helped develop Cards For Humanity, an online version of the popular card game, Cards Against Humanity.</li>
					</ul>
					<div className="tags" >
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
					<h3>Systems Engineer (Electronic Payment Solutions) <span className="date">Jan 2016 - Aug 2017</span></h3>
					<h4>Interswitch Nigeria</h4>
					<ul>
						<li>Spearheaded continuous delivery and deployment of payment solutions, supporting 13 million customers across multiple sites.</li>
						<li>Led full FEP deployment, upgrades, maintenance, and support of core banking systems (Postilion, Postcard, Postilion Office).</li>
						<li>Successfully deployed Hardware Security Modules (HSM), ensuring robust security across payment systems.</li>
						<li>Drove channel enhancements and certifications (ATM, POS, WEB, Mobile), ensuring compliance with EMV standards.</li>
						<li>Seamlessly integrated external systems, networks, and processors, including MasterCard, VISA, and VERVE.</li>
						<li>Managed the installation, upgrading, and administration of Microsoft SQL databases to ensure system reliability.</li>
					</ul>
					<div className="tags" >
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
