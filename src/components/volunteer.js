import React from 'react';

const Volunteer = ({ volunteers }) => (
  <section id="volunteer" className="row">
  <aside className="col-sm-3">
    <h3>Volunteer</h3>
  </aside>
  <div className="col-sm-9">
    <div className="row">
    {volunteers.map(volunteer => (
      <div className="col-sm-12">
        <h4 className="strike-through">
          <span>{volunteer.organization}</span>
          <span className="date">
            {volunteer.startDate} — {volunteer.endDate}
          </span>
        </h4>
        <div className="website pull-right">
          <a href="{volunteer.url}">{volunteer.url}</a>
        </div>
        <div className="position">
          {volunteer.position}
        </div>
        <div className="summary">
          <p>{volunteer.summary}</p>
        </div>
        {volunteer.highlights && (
          <React.Fragment>
            <h4>Highlights</h4>
            <ul className="highlights">
              {volunteer.highlights.map(highlight => (
                <li className="bullet">{highlight}</li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    ))}
    </div>
  </div>
</section>);

export default Volunteer;
