import React from 'react';

const Skills = ({ skills }) => (
  <section id="skills" className="row">
  <aside className="col-sm-3">
    <h3>Skills</h3>
  </aside>
  <div className="col-sm-9">
    <div className="row">
    {skills.map(skill => (
      <div className="col-sm-6">
        <div className="name">
          <h4>{skill.name}</h4>
        </div>
        <ul className="keywords">
          {skill.keywords.map(keyword => (
            <li>{keyword}</li>
          ))}
        </ul>
      </div>
    ))}
    </div>
  </div>
</section>);

export default Skills;
