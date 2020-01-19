import React from 'react';

const Interests = ({ interests }) => (
	<section id="interests" className="row">
		<aside className="col-sm-3">
			<h3>Interests</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{interests.map(interest => (
        <div className="col-sm-6">
          <div className="name">
            <h4>{interest.name}</h4>
          </div>
          <ul className="keywords">
            {interest.keywords.map(keyword => (
              <li>{keyword}</li>
            ))}
          </ul>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default Interests;
