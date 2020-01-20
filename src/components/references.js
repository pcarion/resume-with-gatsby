import React from 'react';

const References = ({ references }) => (
	<section id="references" className="row">
		<aside className="col-sm-3">
			<h3>References</h3>
		</aside>
		<div className="col-sm-9">
			<div className="row">
			{references.map(reference => (
        <div className="col-sm-12">
          <blockquote className="reference">
            <p>{reference.reference}</p>
            <p className="name">
              <strong>— {reference.name}</strong>
            </p>
          </blockquote>
        </div>
      ))}
			</div>
		</div>
	</section>);

export default References;
