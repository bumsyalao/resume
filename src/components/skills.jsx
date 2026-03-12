import React from "react";

const Skills = () => {
	return (
		<section className="section skills">
			<h2>Core Skills</h2>
			<div className="skills-grid">
				<div className="skills-row">
					<div className="skills-label">
						<strong>Frontend Engineering</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">React</span>
						<span className="tag-item">Next.js</span>
						<span className="tag-item">TypeScript</span>
						<span className="tag-item">JavaScript (ES6+)</span>
						<span className="tag-item">HTML5</span>
						<span className="tag-item">CSS3</span>
						<span className="tag-item">TailwindCSS</span>
						<span className="tag-item">Responsive Design</span>
						<span className="tag-item">Accessibility</span>
					</div>
				</div>

				<div className="skills-row">
					<div className="skills-label">
						<strong>UI Architecture &amp; Systems</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">Component Architecture</span>
						<span className="tag-item">Component Libraries</span>
						<span className="tag-item">State Management</span>
						<span className="tag-item">Performance Optimization</span>
						<span className="tag-item">Design System Collaboration</span>
					</div>
				</div>

				<div className="skills-row">
					<div className="skills-label">
						<strong>Testing &amp; Quality</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">Jest</span>
						<span className="tag-item">Cypress</span>
						<span className="tag-item">TDD</span>
						<span className="tag-item">Integration Testing</span>
						<span className="tag-item">End-to-end Testing</span>
						<span className="tag-item">CI/CD Automation</span>
					</div>
				</div>

				<div className="skills-row">
					<div className="skills-label">
						<strong>Product &amp; Collaboration</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">Product Engineering</span>
						<span className="tag-item">System Design</span>
						<span className="tag-item">API Documentation</span>
						<span className="tag-item">Agile/Scrum</span>
						<span className="tag-item">Cross-functional Collaboration</span>
						<span className="tag-item">Mentorship</span>
					</div>
				</div>

				<div className="skills-row">
					<div className="skills-label">
						<strong>AI-assisted Workflows</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">AI-assisted Development</span>
						<span className="tag-item">Intelligent Automation</span>
						<span className="tag-item">AI-powered Product Experiences</span>
					</div>
				</div>

				<div className="skills-row">
					<div className="skills-label">
						<strong>Backend &amp; APIs</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">Node.js</span>
						<span className="tag-item">NestJS</span>
						<span className="tag-item">REST APIs</span>
						<span className="tag-item">GraphQL</span>
						<span className="tag-item">Real-time Data</span>
						<span className="tag-item">Microservices</span>
						<span className="tag-item">PostgreSQL</span>
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">Redis</span>
					</div>
				</div>

				<div className="skills-row">
					<div className="skills-label">
						<strong>Cloud &amp; DevOps</strong>
					</div>
					<div className="skills-items">
						<span className="tag-item">AWS (Lambda, ECS, CloudFront, S3)</span>
						<span className="tag-item">GCP</span>
						<span className="tag-item">Docker</span>
						<span className="tag-item">Kubernetes</span>
						<span className="tag-item">GitHub Actions</span>
						<span className="tag-item">Serverless</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
