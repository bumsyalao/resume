import React from 'react';
import ReactDOM from 'react-dom';

const Awards = () => {
	return (
		<section className="section">
			<h2>Selected Awards and Certifications</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
					Front-End Web Developer <small className="date">2018</small>
					</h3>
					<p>Udacity</p>
				</article>
				<article className="flex-item">
					<h3>
					Microsoft Certified Professional <small className="date">2016</small>
					</h3>
					<p>Microsoft License 13392204</p>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>Lean Six Sigma Yellow Belt Certification <small className="date">2017</small>
					</h3>
					<p><a href="http://www.goleansixsigma.com/lean-six-sigma-certification-yellow-belt/" target="_blank">See certificate</a></p>
				</article>
				<article className="flex-item">
					<h3>Python- codecademy <small className="date">2017</small>
					</h3>
					<p><a href="https://www.codecademy.com/" target="_blank">Codecademy</a></p>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
					Postilion Basic Traning <small className="date">2016</small>
					</h3>
					<p><a href="https://www.linkedin.com/company/5063/" target="_blank">ACI worldwide </a></p>
				</article>
			</div>
		</section>
	);
};

export default Awards;
