import React from 'react';

const Publications = ({ publications }) => (
  <section id="publications" className="row">
  <aside className="col-sm-3">
    <h3>Publications</h3>
  </aside>
  <div className="col-sm-9">
    <div className="row">
    {publications.map(publication => (
      <div className="col-sm-12">
        <h4 className="strike-through">
          <span>{publication.name}</span>
          <span className="date">
            {publication.releaseDate}
          </span>
        </h4>
        <div className="website pull-right">
          <a href={publication.url}></a>
        </div>
        <div className="publisher">
          <em>Published by </em>
          <strong>{publication.publisher}</strong>
        </div>
        <div className="summary">
          <p>{publication.summary}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
</section>);

export default Publications;
