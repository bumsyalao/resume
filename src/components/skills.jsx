import React from "react";

const Skills = () => {
	return (
		<section className="section skills">
			<h2>Technical Skills</h2>
			<div className="skills-column">
				<div className="skills-category">
					<strong>Frontend</strong>
					<div className="skills-items">
						<span className="tag-item">React</span>
						<span className="tag-item">NextJS</span>
						<span className="tag-item">Redux/Context API</span>
						<span className="tag-item">HTML</span>
						<span className="tag-item">CSS/TailwindCSS</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">TypeScript</span>
						<span className="tag-item">JavaScript ES6</span>
                        <span className="tag-item">StrapiCMS</span>

					</div>
				</div>
				<div className="skills-category">
					<strong>Backend</strong>
					<div className="skills-items">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">NestJS</span>
						<span className="tag-item">PostgreSQL</span>
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">GraphQL</span>
						<span className="tag-item">Redis</span>
						<span className="tag-item">RESTful APIs</span>
                        <span className="tag-item">Websockets</span>

					</div>
				</div>
				<div className="skills-category">
					<strong>DevOps</strong>
					<div className="skills-items">
						<span className="tag-item">AWS (EC2, S3, CloudFront)</span>
						<span className="tag-item">Docker</span>
						<span className="tag-item">Kubernetes</span>
						<span className="tag-item">CI/CD</span>
						<span className="tag-item">Serverless</span>
						<span className="tag-item">Microservices</span>
                        <span className="tag-item">Distributed systems</span>

					</div>
				</div>
				<div className="skills-category">
					<strong>Testing & Design</strong>
					<div className="skills-items">
						<span className="tag-item">Storybook</span>
						<span className="tag-item">TDD</span>
						<span className="tag-item">Jest</span>
						<span className="tag-item">System Design</span>
						<span className="tag-item">Load Balancing</span>
						<span className="tag-item">Unit Testing</span>
						<span className="tag-item">Agile Methodologies</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
