import React from 'react';
import ReactDOM from 'react-dom';

const Awards = () => {
	return (
		<section className="section">
			<h2>Selected Memberships and Certifications</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
					Data-Driven Decisions
					<small className="date">2023</small>
					</h3>
					<p><a href="https://www.coursera.org/account/accomplishments/verify/KLR8HZAQQSW2?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank">View Certificate</a></p>
				</article>
				<article className="flex-item">
					<h3>
					Foundations: Data, Data, Everywhere
					<small className="date">2023</small>
					</h3>
					<p><a href="https://www.coursera.org/account/accomplishments/verify/L2CXMFUM7KNQ?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank">View Certificate</a></p>
				</article>


			</div>
			<div className="flex">
			<article className="flex-item">
					<h3>
					Member of the University of Sheffield Environmental Science Society
					</h3>
				</article>
				<article className="flex-item">
					<h3>
					Member of Afro Caribbean Society					</h3>
				</article>

			</div>
			<div className="flex">
			<article className="flex-item">
					<h3>
					Member of the University of Sheffield Environmental Science Society Football team					</h3>
				</article>
				<article className="flex-item">
					<h3>
					Member of Politics Society Football team					</h3>
				</article>


			</div>

		</section>
	);
};

export default Awards;
