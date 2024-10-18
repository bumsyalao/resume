import React from 'react';
import ReactDOM from 'react-dom';

const Education = () => {
	return (
		<section className="section education">
			<h2>Education</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Hult International Business School <small className="date">2024-2025</small>
					</h3>
					<p>Masters of Business Administration(MBA)</p>
				</article>
				<article className="flex-item">
					<h3>
						Covenant University <small className="date">2010 - 2014</small>
					</h3>
					<p>Bachelor's Degree, Computer Science</p>
					<p> CGPA: 4.43/5 </p>
					<p>Final year project: A Computing Platform for Metabolic Network Visualization and Topological Analysis.</p>
				</article>
			</div>
		</section>
	);
};

export default Education;
