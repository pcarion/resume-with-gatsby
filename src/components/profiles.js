import React from 'react';

const Profiles = ({ profiles }) => (
  <section id="profiles" className="row">
    <aside className="col-sm-3">
      <h3>Profiles</h3>
    </aside>
    <div className="col-sm-9">
      <div className="row">
        {profiles.map(profile => (
          <div className="col-sm-6">
            <strong className="network">{profile.network}</strong>
            {profile.username && (
              <div className="username">
                {profile.url ? (
                  <div className="url">
                    <a href="{profile.url}">{profile.username}</a>
                  </div>
                ) : (
                  <span>{profile.username}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Profiles;
