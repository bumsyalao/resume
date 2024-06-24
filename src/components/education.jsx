import React from 'react';
import ReactDOM from 'react-dom';

const Education = () => {
	return (
		<section className="section education">
			<h2>Education</h2>
			<div className="flex">
			<article className="flex-item">
				<h3>
				 University of Nottingham, Nottingham. England <small className="date">2015 – 2016</small>
				</h3>
				<p>MSc (Hons) Animal Nutrition with Merit</p>
				<p> Non-Ruminant Nutrition (pigs and poultry), Ruminant Nutrition, Fundamentals of Nutrition, Companion and Zoo Animal Nutrition, Research techniques in animal nutrition, Molecular Nutrition, Feed industry business and case studies and a Research project in “Evaluating the Effects of Extrusion and Protein source on Dogs Performance Using Broiler (Ross) as a Model”.</p>
			</article>
			<article className="flex-item">
				<h3>
				University of Sheffield, Sheffield. England <small className="date">2012 – 2015</small>
				</h3>
				<p>BSc (Hons) Environmental Bioscience</p>
				<p>Research project undertaken: The effects of Chemical Poly (ADP-ribose)-Polymerase (PARP) Inhibition and Temperature Stress on Plants Using Arabidopsis. Arabidopsis thaliana - ecotype Columbia (Col-0).</p>
			</article>
			</div>
		</section>
	);
};

export default Education;
