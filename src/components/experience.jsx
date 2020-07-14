import React from 'react';
import ReactDOM from 'react-dom';

const Experience = () => {
  return (
    <section className="section">
      <h2>Relevant Experience</h2>
      <div className="flex">
        <article className="flex-item">
          <h3>
            Software Developer (contractor) at IBM <small className="date">Dec 2018 - Present</small>
          </h3>
          <p>
            <ul>
              <li>I worked on the TAMM Project here In Abu Dhabi. It is an impactful project aiming to revolutionise how citizens of Abu Dhabi interact with government services.</li>
              <li>Developed highly optimised frontend visualisation of investment data using charts, graphs, interactive investment maps and business calculators for potential business investors.</li>
              <li>Wrote numerous unit and API tests.</li>
              <li>Handled API integrations, and also ensured cross-browser support, while following <strong>agile</strong> software programming practices.</li>
            </ul>
          </p>
          <div className="tags">
            <span className="tag-item">NodeJS</span>
            <span className="tag-item">Typescript</span>
            <span className="tag-item">React</span>
            <span className="tag-item">GraphQL</span>
            <span className="tag-item">PostgresSQL</span>
            <div className="tags">
              <span className="tag-item">SCSS</span>
              <span className="tag-item">TDD</span>
              <span className="tag-item">Jest</span>
              <span className="tag-item">Agile</span>
              <span className="tag-item">Microservices</span>
              <span className="tag-item">Esri Maps</span>
            </div>
            <div className="tags">
              <a href="https://www.tamm.abudhabi/" target="_blank" className="tag-item">
                <i className="mdi mdi-earth" /> tamm.abudhabi
						</a>
            </div>
          </div>
        </article>
        <article className="flex-item">
          <h3>
            Remote & Freelancing <small className="date">Feb 2018 - Dec 2018</small>
          </h3>
          <p>
            <ul>
              <li>I Worked remotely with engineering teams to build web applications</li>
              <li>I worked on Stanbic Bank IBM APIC; Deployment of UAT, Test and Production servers</li>
              <li>Set up network servers for the API Gateway DB, API manager and Developer portal.</li>
              <li>Set up load balancers, to connect with the API cloud and manage network traffic.</li>
            </ul>
          </p>
          <div className="tags">
            <span className="tag-item">NodeJS</span>
            <span className="tag-item">LoopBackJS</span>
            <span className="tag-item">Networking</span>
            <span className="tag-item">IBM Cloud</span>
            <span className="tag-item">IBM API Connect</span>
            <span className="tag-item">React</span>
          </div>
        </article>

      </div>
      <div className="flex">
        <article className="flex-item">
          <h3>
            Software Developer at Andela NG <small className="date">Aug 2017 - Feb 2018</small>
          </h3>
          <p>
            <ul>
              <li>Developed an online publishing platform, where users can share and manage articles.</li>
              <li>Developed a complex messaging web application, to enable communication and collaboration amongst teams.</li>
              <li>Wrote numerous unit and API tests.</li>
              <li>Contributed to Reaction commerce open source.</li>
              <li>Contributed to Cards For Humanity, a fast-paced online version of the popular card game, Cards Against Humanity.</li>
            </ul>
          </p>
          <div className="tags">
            <span className="tag-item">NodeJS</span>
            <span className="tag-item">React</span>
            <span className="tag-item">Redux</span>
            <span className="tag-item">SCSS</span>
            <span className="tag-item">TDD</span>
            <span className="tag-item">Javascript ES6</span>
          </div>
          <div className="tags">
            <span className="tag-item">MongoDB</span>
            <span className="tag-item">PostgresSQL</span>
            <span className="tag-item">Webpack</span>
            <span className="tag-item">Heroku</span>
            <a href="https://www.andela.com/" target="_blank" className="tag-item">
              <i className="mdi mdi-earth" /> andela.com
						</a>
          </div>
        </article>
        <article className="flex-item">
          <h3>
            EFT Specialist at Interswitch NG<small className="date">Jan 2016 - Aug 2017</small>
          </h3>
          <p>
            <ul>
              <li>Full FEP Deployment, Upgrades, Maintenance & Support of core banking systems (Postilion, Postcard, Postilion Office).</li>
              <li>HSM (Hardware Security Module) Deployment.</li>
              <li>Channel Enhancement & Certification (ATM, POS, WEB, and Mobile).</li>
              <li>Integration of external systems and networks. Examples: Integration to Processors/Switches (MasterCard, VISA, VERVE).</li>
              <li>Installing, managing, upgrading and administering Microsoft SQL databases</li>
            </ul>
          </p>
          <div className="tags">
            <span className="tag-item">Postilion</span>
            <span className="tag-item">EFT</span>
            <span className="tag-item">MSSQL</span>
            <a href="https://www.interswitchgroup.com/articles/GirlsWhoCode.html" target="_blank" className="tag-item">
              <i className="mdi mdi-earth" /> interswitch.com
						</a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Experience;
