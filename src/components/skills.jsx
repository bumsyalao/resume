import React from "react";

const Skills = () => {
	return (
		<section className="section skills">
			<h2>Core Skills</h2>
			<div className="skills-column">
				<div className="skills-category">
					<strong>Languages & Frameworks:</strong>
					<div className="skills-items">
						<span className="tag-item">Node.js</span>
						<span className="tag-item">NestJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Next.js</span>
						<span className="tag-item">TypeScript</span>
						<span className="tag-item">JavaScript (ES6+)</span>
						<span className="tag-item">HTML5</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">TailwindCSS</span>
					</div>
				</div>
				<div className="skills-category">
					<strong>Backend & Databases:</strong>
					<div className="skills-items">
						<span className="tag-item">PostgreSQL</span>
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">Redis</span>
						<span className="tag-item">REST APIs</span>
						<span className="tag-item">GraphQL</span>
						<span className="tag-item">Microservices Architecture</span>
					</div>
				</div>
				<div className="skills-category">
					<strong>Cloud & DevOps:</strong>
					<div className="skills-items">
						<span className="tag-item">AWS (Lambda, ECS, S3)</span>
						<span className="tag-item">GCP</span>
						<span className="tag-item">Docker</span>
						<span className="tag-item">Kubernetes</span>
						<span className="tag-item">GitHub Actions</span>
						<span className="tag-item">Serverless Functions</span>
					</div>
				</div>
				<div className="skills-category">
					<strong>Testing & Quality:</strong>
					<div className="skills-items">
						<span className="tag-item">Jest</span>
						<span className="tag-item">Cypress</span>
						<span className="tag-item">TDD</span>
						<span className="tag-item">Integration Testing</span>
						<span className="tag-item">CI/CD Automation</span>
					</div>
				</div>
				<div className="skills-category">
					<strong>Leadership & Collaboration:</strong>
					<div className="skills-items">
						<span className="tag-item">System Design</span>
						<span className="tag-item">API Documentation</span>
						<span className="tag-item">Agile/Scrum</span>
						<span className="tag-item">Product Ownership</span>
						<span className="tag-item">Cross-functional Collaboration</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
