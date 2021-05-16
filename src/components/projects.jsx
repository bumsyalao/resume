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
						Github Searcher <small className="date">2020</small>
					</h3>
					<p>Search through github users and repository.</p>
					<div className="tags">
						<span className="tag-item">NodeJS</span>
						<span className="tag-item">React</span>
						<span className="tag-item">Typescript</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Redis</span>
						<span className="tag-item">Mongoose</span>
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
				<article className="flex-item">
					<h3>
						The-Consent-Game <small className="date">2019</small>
					</h3>
					<p>
						The consent game is built for The Consent Workshop, to teach young
						adults about consent.
					</p>
					<div className="tags">
						<span className="tag-item">React</span>
						<span className="tag-item">Redux</span>
						<span className="tag-item">SCSS</span>
						<span className="tag-item">Javascript ES6</span>
						<a
							href="https://the-consent-game.herokuapp.com/"
							target="_blank"
							className="tag-item"
						>
							<i className="mdi mdi-earth" /> The-Consent-Game
						</a>
					</div>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
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
				</article>
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
				<article className="flex-item">
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
				</article>
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
