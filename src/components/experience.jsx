import React from "react";

const Experience = () => {
	return (
		<section className="section experience">
			<h2>Professional Experience</h2>

			<article className="flex-item">
				<h3>
					Senior Full-Stack Engineer{" "}
					<span className="date">Apr 2025 – Present</span>
				</h3>
				<div className="flex-row">
					<h4>TryHackMe</h4> <span className="separator">|</span>
					<em>Remote</em>
				</div>
				<ul>
					<li>
						Led frontend development for React-based dashboards and product surfaces in a high-traffic cybersecurity platform, focusing on responsiveness, safe rollout, and maintainable UI architecture.
					</li>
					<li>
						Built and refined reusable component patterns used across multiple product areas, improving consistency and reducing duplicated frontend work.
					</li>
					<li>
						Develop frontend features backed by Node.js services, translating product requirements into clear UI and API changes.					</li>
					<li>
						Improved dashboard responsiveness through performance profiling, targeted render optimization, and cleanup of inefficient data-fetching paths.
					</li>
					<li>
						Implemented real-time product features with WebSockets for live progress updates and notifications.
					</li>
					<li>
						Strengthened delivery workflows by standardizing linting, testing, and build checks in GitHub Actions and Docker-based environments.
					</li>
					<li>
						Added structured logging and request-level observability to make production issues easier to trace and debug.
					</li>
					<li>
						Wrote API usage notes, component documentation, and setup guides that reduced onboarding friction for engineers and contributors.
					</li>
					<li>
						Reviewed code with a focus on readability, test coverage, and long-term maintainability, while making incremental refactors to keep frontend code healthy.
					</li>
					<li>
						Worked closely with product and data stakeholders to turn ambiguous requirements into clear deliverables, acceptance criteria, and release plans.
					</li>

				</ul>
				<div className="tags no-print">
					<a
						href="https://tryhackme.com/"
						target="_blank"
						className="tag-item"
					>
						<i className="mdi mdi-earth" /> tryhackme.com
					</a>
				</div>
			</article>

			<article className="flex-item">
				<h3>
					Senior Full-Stack Engineer{" "}
					<span className="date">Sept 2020 – Mar 2024</span>
				</h3>
				<div className="flex-row">
					<h4>Tradeling</h4> <span className="separator">|</span>
					<em>Dubai, UAE</em>
				</div>
				<ul>
					<li>
						Designed and shipped a React and Next.js back-office application used by internal teams to support daily operational workflows.
					</li>
					<li>
						Built and optimized shared frontend modules, including banners, carousels, and content components, with a focus on rendering efficiency and maintainability.
					</li>
					<li>
						Improved application performance through code-splitting, memoization, and tighter control over data-fetching patterns.
					</li>
					<li>
						Worked on backend performance issues by tuning queries, adding indexes, and introducing caching where appropriate.
					</li>
					<li>
						Led the migration from MongoDB to PostgreSQL, covering schema design, data validation, rollout planning, and production cutover.
					</li>
					<li>
						Introduced Strapi as a headless CMS, enabling non-technical teams to manage and publish content without engineering support for routine updates.
					</li>
					<li>
						Managed AWS infrastructure across EC2, S3, and CloudFront to support reliable delivery across environments.
					</li>
					<li>
						Built CI/CD pipelines with automated checks for testing, linting, and deployment gating.
					</li>
					<li>
						Mentored junior engineers on React fundamentals, debugging, pull request quality, and test writing.
					</li>
					<li>
						Partnered with product, design, and operations teams to deliver launches while balancing UX, data integrity, and engineering constraints.
					</li>
					<li>
						Drove incremental refactors to simplify code structure, reduce regressions, and improve development speed over time.
					</li>
				</ul>
				<div className="tags no-print">
					<a
						href="https://www.tradeling.com/"
						target="_blank"
						className="tag-item"
					>
						<i className="mdi mdi-earth" /> tradeling.com
					</a>
				</div>
			</article>

			<article className="flex-item">
				<h3>
					Software Developer, TAMM Project{" "}
					<span className="date">Dec 2018 – Jun 2019</span>
				</h3>
				<div className="flex-row">
					<h4>IBM (Contractor)</h4>
					<span className="separator">|</span>
					<em>Abu Dhabi, UAE</em>
				</div>
				<ul>
					<li>
						Contributed to Abu Dhabi’s TAMM e-government platform by building modular services and responsive web interfaces for citizen-facing workflows.
					</li>
					<li>
						Integrated external business and investment APIs into calculators and dashboards used to support decision-making.
					</li>
					<li>
						Built responsive interfaces for desktop and mobile, improving usability and consistency across screen sizes.
					</li>
					<li>
						Improved data-heavy screens by reducing redundant requests, introducing caching, and simplifying response handling on the frontend.
					</li>
					<li>
						Worked on charts and map-based interfaces to present information more clearly to end users.
					</li>
					<li>
						Added unit and integration tests and integrated them into CI workflows to support more stable releases.
					</li>
					<li>
						Produced technical documentation for APIs and user-facing functionality to support delivery across engineering and stakeholder groups.
					</li>
					<li>
						Collaborated with design, analytics, and infrastructure teams to refine requirements and reduce late-stage delivery surprises.
					</li>
					<li>
						Applied secure data-handling practices in line with platform and organizational standards.
					</li>
					<li>Investigated defects, documented reproducible cases, and supported fixes through release.
					</li>

				</ul>
				<div className="tags no-print">
					<a
						href="https://www.tamm.abudhabi/"
						target="_blank"
						className="tag-item"
					>
						<i className="mdi mdi-earth" /> tamm.abudhabi
					</a>
				</div>
			</article>

			<article className="flex-item">
				<h3>
					Software Engineer <span className="date">Aug 2017 – Feb 2018</span>
				</h3>
				<div className="flex-row">
					<h4>Andela</h4> <span className="separator">|</span>
					<em>Remote</em>
				</div>
				<ul>
					<li>
						Built web applications for publishing and messaging products, with a focus on clean UI, responsiveness, and maintainable frontend code.
					</li>
					<li>Developed features that supported content creation, editing, and management in editorial workflows.
					</li>
					<li>Worked on performance-sensitive product areas to improve responsiveness under load.
					</li>
					<li>Contributed bug fixes and documentation improvements to open-source commerce tooling.
					</li>
					<li>Collaborated with distributed teams across time zones using clear specs, async communication, and shared engineering standards.
					</li>
					<li>Added unit and integration tests to protect core product flows from regression.
					</li>
					<li>Set up linting, formatting, and lightweight CI checks to improve code quality and review consistency.
					</li>
					<li>Documented APIs and onboarding steps to help new contributors ramp up faster.</li>
				</ul>
				<div className="tags no-print">
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
					Systems Engineer (Electronic Payment Solutions){" "}
					<span className="date">Jan 2016 – Aug 2017</span>
				</h3>
				<div className="flex-row">
					<h4>Interswitch</h4> <span className="separator">|</span>
					<em>Lagos, Nigeria</em>
				</div>
				<ul>
					<li>Supported production payment systems across deployment, maintenance, and incident response workflows.
					</li>
					<li>Managed upgrades and operational changes across payment infrastructure in coordination with bank and partner teams.
					</li>
					<li>Worked with HSM deployments and secure transaction environments.
					</li>
					<li>Supported integrations across card networks and payment channels including ATM, POS, web, and mobile.
					</li>
					<li>Maintained SQL environments, deployment procedures, and operational checklists to improve release reliability.
					</li>
					<li>Assisted with troubleshooting, escalation, and post-fix validation in business-critical systems.
					</li>

				</ul>
				<div className="tags no-print">
					<a
						href="https://www.interswitchgroup.com/"
						target="_blank"
						className="tag-item"
					>
						<i className="mdi mdi-earth" /> interswitchgroup.com
					</a>
				</div>
			</article>
		</section>
	);
};

export default Experience;
