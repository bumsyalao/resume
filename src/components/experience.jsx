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
						Led frontend development for data-intensive React dashboards in a
						cybersecurity SaaS serving 6M+ users, prioritizing responsiveness,
						reliability, and safe rollout paths.
					</li>
					<li>
						Built and evolved reusable React component patterns backed by Node.js
						services, improving UI consistency and enabling faster iterations
						across multiple product areas.
					</li>
					<li>
						Increased user engagement by ~25% through modular UI updates,
						targeted performance profiling, and focused optimization of
						high-traffic API endpoints.
					</li>
					<li>
						Implemented real-time features with WebSockets for live progress and
						notifications, and tuned MongoDB queries to reduce latency during
						peak usage.
					</li>
					<li>
						Strengthened delivery with Docker and GitHub Actions CI/CD,
						standardizing build/test/lint stages and cutting deployment time by
						~40%.
					</li>
					<li>
						Introduced practical observability hygiene (structured logs, key
						request metrics) to simplify debugging and reduce time-to-identify
						on recurring issues.
					</li>
					<li>
						Worked closely with product and data teams to turn ambiguous
						requirements into well-scoped frontend and API work with clear
						success metrics and acceptance criteria.
					</li>
					<li>
						Authored concise API usage notes, component READMEs, and setup docs
						to speed onboarding and reduce back-and-forth on integration
						questions.
					</li>
					<li>
						Participated in code reviews with a focus on readability, test
						coverage, and long-term maintainability; used small, continuous
						refactors to keep tech debt in check without slowing delivery.
					</li>
					<li>
						Used AI-assisted development workflows (code suggestions,
						refactor guidance) to accelerate iteration on React and Node.js
						modules while keeping review standards high.
					</li>
					<li>
						Coordinated cross-team work (engineering, product, contributors) to
						align releases, reduce integration risk, and keep stakeholder
						communication tight.
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
						Designed and shipped a React/Next.js back-office application that
						streamlined internal workflows and reliably supported 10K+ daily
						users.
					</li>
					<li>
						Optimized core React/Next.js modules (banners, carousels, content
						cards) via code-splitting and memoization, improving page load by
						~35%.
					</li>
					<li>
						Reduced backend API latency by ~40% with targeted query tuning,
						indexes, and caching, easing load on shared services.
					</li>
					<li>
						Led the MongoDB to PostgreSQL migration end-to-end, including schema
						design, data validation, rollbacks, and cut-over with minimal
						disruption.
					</li>
					<li>
						Introduced and operationalized Strapi (headless CMS) so
						non-technical teams could publish and iterate on content ~90%
						faster.
					</li>
					<li>
						Managed AWS (EC2, S3, CloudFront) for predictable performance and
						availability, maintaining high uptime across environments.
					</li>
					<li>
						Built CI/CD pipelines with automated tests, linting, and gated
						deploys, reducing delivery time by ~40% and raising release
						confidence.
					</li>
					<li>
						Mentored 5+ junior engineers on frontend best practices, debugging,
						PR etiquette, and test writing; improved onboarding speed and
						consistency.
					</li>
					<li>
						Conducted systematic code reviews with clear checklists (security,
						performance, accessibility), raising baseline quality across squads.
					</li>
					<li>
						Collaborated with product, design, and ops to balance data
						integrity, UX, and delivery timelines during high-pressure launches.
					</li>
					<li>
						Drove small, continuous refactors to reduce tech debt, standardize
						folder structures, and prevent regressions.
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
						Contributed to TAMM, Abu Dhabi&apos;s e-Government platform, building
						modular Node.js/Python services and responsive, component-based web
						UIs.
					</li>
					<li>
						Integrated external business and investment APIs into calculators
						and dashboards, improving decision workflows for end-users.
					</li>
					<li>
						Built responsive web interfaces for desktop and mobile, improving
						accessibility, layout consistency, and usability across devices.
					</li>
					<li>
						Enhanced front-end data visualizations (charts, map views) and
						interaction patterns to surface insights faster for users.
					</li>
					<li>
						Raised performance ~30% on data-heavy screens by eliminating
						redundant calls, adding caching, and optimizing API response
						payloads.
					</li>
					<li>
						Designed and implemented testing strategies (unit and integration)
						and wired them into the CI pipeline to stabilize releases.
					</li>
					<li>
						Wrote and maintained technical documentation (API references, user
						guides) to support multiple stakeholder groups.
					</li>
					<li>
						Collaborated with design, analytics, and infrastructure teams to
						refine requirements, validate scope, and reduce surprises late in
						sprints.
					</li>
					<li>
						Implemented secure data handling patterns in line with organizational
						standards for privacy and confidentiality.
					</li>
					<li>
						Triaged bugs with clear reproduction steps and metrics, reducing
						time-to-fix on recurring issues.
					</li>
					<li>
						Participated in sprint planning, demos, and retros to continuously
						improve delivery practices and communication.
					</li>
					<li>
						Helped streamline deployment steps with containerization and
						consistent environment configuration.
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
						Built an online publishing platform with a clean editorial web UI,
						making it easy for users to create, edit, and manage articles.
					</li>
					<li>
						Developed a messaging web app focused on performance and scalability,
						improving responsiveness under load.
					</li>
					<li>
						Contributed to Reaction Commerce (open-source) with bug fixes and
						documentation improvements recognized by maintainers.
					</li>
					<li>
						Collaborated with distributed teams across time zones, using clear
						specs, async updates, and shared standards to stay unblocked.
					</li>
					<li>
						Implemented unit and integration tests (Jest/Mocha where applicable)
						to protect core modules from regressions.
					</li>
					<li>
						Established linting and formatting rules plus small CI checks to keep
						code style consistent and pull requests easier to review.
					</li>
					<li>
						Documented APIs and onboarding steps for new contributors, lowering
						ramp-up time and improving project continuity.
					</li>
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
					<li>
						Supported continuous delivery and deployment of payment solutions
						serving ~13M customers across multiple channels.
					</li>
					<li>
						Led FEP deployments, upgrades, and maintenance across
						Postilion/PostCard/Postilion Office, coordinating closely with bank
						teams.
					</li>
					<li>
						Deployed and maintained Hardware Security Modules (HSMs) to
						safeguard keys and ensure robust transaction security.
					</li>
					<li>
						Drove channel certifications and enhancements (ATM, POS, WEB, Mobile)
						in line with EMV and network standards.
					</li>
					<li>
						Integrated external networks and processors (MasterCard, VISA,
						Verve), ensuring end-to-end compatibility.
					</li>
					<li>
						Administered MS SQL environments for reliability and performance,
						enforcing backups and maintenance routines.
					</li>
					<li>
						Contributed to incident response with structured triage, clear
						escalation paths, and post-fix validation.
					</li>
					<li>
						Wrote operational SOPs and deployment checklists that reduced
						misconfigurations and handover friction.
					</li>
					<li>
						Performed capacity checks and performance tests ahead of peak periods
						to reduce risk of slowdowns and outages.
					</li>
					<li>
						Coordinated with compliance and security teams on audit items,
						evidence gathering, and remediation tracking.
					</li>
					<li>
						Partnered with business stakeholders to prioritize fixes that
						protected customer trust and minimized transaction failures.
					</li>
					<li>
						Assisted with vendor coordination and environment parity across
						test/stage/prod to stabilize releases.
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
