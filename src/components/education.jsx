import React from 'react';
import ReactDOM from 'react-dom';

const Education = () => {
	return (
		<section className="section education">
			<h2>Education</h2>
			{/* <div className="flex"> */}
				<article className="flex-item">
					<h3>
						Hult International Business School <span className="date">2024 - 2025</span>
					</h3>

					<p>Masters of Business Administration(MBA)</p>
					<ul>
						<li>Business Data Analysis</li>
						<li>Accounting for Managers</li>
						<li>Financial Management and Decision making</li>
						<li>Marketing Strategy</li>
					</ul>
				</article>
				<article className="flex-item">
					<h3>
						Covenant University <span className="date">2010 - 2014</span>
					</h3>
					<p>Bachelor's Degree, Computer Science</p>
					<p>CGPA: 4.43/5</p>
				</article>
			{/* </div> */}
		</section>
	);
};

export default Education;
