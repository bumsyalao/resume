import React from 'react';
import ReactDOM from 'react-dom';

const Projects = () => {
	return (
		<section className="section">
			<h2>Selected Personal Projects</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Ideabox <small className="date">2017</small>
					</h3>
					<p>Ideabox is a simple application that allows users to create a pool of ideas and promote collaboration.</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Mongoose</span>
						<span className="tag-item">Javascript ES6</span>
						<a href="https://ideabox-now.herokuapp.com/" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> ideabox
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Post-It <small className="date">2017</small>
					</h3>
					<p>Post-it is a simple application that allows users create groups and post messages to group.</p>
					<div className="tags">
					<span className="tag-item">NodeJS</span>
					<span className="tag-item">React</span>
					<span className="tag-item">Redux</span>
					<span className="tag-item">SCSS</span>
					<span className="tag-item">PostgresSQL</span>
					<span className="tag-item">Javascript ES6</span>
						<a href="https://postit-now.herokuapp.com/" target="_blank" className="tag-item">
						<i className="mdi mdi-earth" /> post-it
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Diary<small className="date">2017</small>
					</h3>
					<p>A python/django playground.</p>
					<div className="tags">
						<span className="tag-item">Python</span>
						<span className="tag-item">Django</span>
						<a href="https://github.com/bumsyalao/diary" target="_blank" className="tag-item">
							<i className="mdi mdi-earth" /> Diary
						</a>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Projects;
