import React from 'react';

const Awards = ({ awards }) => (
	<section id="awards" className="row">
		<aside className="col-sm-3">
			<h3>Awards</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{awards.map(award => (
        <div className="col-sm-12">
          <h4 className="strike-through">
            <span>{award.title}</span>
          </h4>
          <div className="date pull-right">
            <em>Awarded </em>
            {award.date}
          </div>
          <div className="awarder">
            <em>by </em>
            <strong>{award.awarder}</strong>
          </div>
          <div className="summary">
            {award.summary}
          </div>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default Awards;
