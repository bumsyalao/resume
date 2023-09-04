import React from "react";
import ReactDOM from "react-dom";
//https://github.com/bumsyalao/github-searcher
const Projects = () => {
	return (
		<section className="section">
			<h2>Selected Personal Projects</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Location Intelligence System <small className="date">2023</small>
					</h3>
					<p>This project is a Location Intelligence System that allows users to track and manage vehicle locations.
						It includes a web-based user interface for interaction and a back-end API for data storage and retrieval.
						The system utilizes Typescript, React for the front-end development, Node.js and Express for the back-end API, and MongoDB as the database management system. It also integrates with Google Maps Developer APIs for displaying vehicle locations on a map.</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">GoogleAPIs</span>
						<span className="tag-item">MongoDB</span>
						<span className="tag-item">AWS</span>
						<span className="tag-item">Heroku</span>
						<span className="tag-item">Javascript ES6</span>
						<a
							href="https://github.com/bumsyalao/location-intelligence-system"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> Location Intelligence System
						</a>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Github Searcher <small className="date">2020</small>
					</h3>
					<p>This project allows users to search through github users and repository.
						It includes a web-based user interface for interaction and a back-end API for data storage and retrieval.
						The system utilizes Typescript, React for the front-end development, Node.js and Express for the back-end API, and Redis for caching API request to Github.</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Redis</span>
						<span className="tag-item">Mongoose</span>
						<span className="tag-item">GithubAPI</span>
						<span className="tag-item">Javascript ES6</span>
						<a
							href="https://github.com/bumsyalao/github-searcher"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> Github-sercher
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				{/* <article className="flex-item">
					<h3>
						Post-It <small className="date">2017</small>
					</h3>
					<p>
						Post-it is a simple application that allows users create groups and
						post messages to group.
					</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">PostgresSQL</span>
						<span className="tag-item">Javascript ES6</span>
						<a
							href="https://postit-now.herokuapp.com/"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> post-it
						</a>
					</div>
				</article> */}
				{/* <article className="flex-item">
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
				</article> */}
				{/* <article className="flex-item">
					<h3>
						Flames<small className="date">2018</small>
					</h3>
					<p>A game of love and prediction.</p>
					<div className="tags">
						<span className="tag-item">HTML</span>
						<span className="tag-item">CSS</span>
						<span className="tag-item">Javascript</span>
						<a
							href="https://bumsyalao.github.io/Flames/"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" />
							Flames
						</a>
					</div>
				</article> */}
				{/* <article className="flex-item">
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
				</article> */}
			</div>
		</section>
	);
};

export default Projects;
