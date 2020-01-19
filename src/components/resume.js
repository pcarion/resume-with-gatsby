import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './header';
import Contact from './contact';
import About from './about';
import Profiles from './profiles';
import Work from './work';
import Volunteer from './volunteer';
import Education from './education';
import Awards from './awards';
import Publications from './publications';
import Skills from './skills';
import Languages from './languages';
import Interests from './interests';
import References from './references';

// console.log('@@ styles:', styles);

const Resume = ({ resume }) => {
  const { basics, work, volunteer, education, awards, publications, skills, languages, interests, references } = resume;
  return (
    <React.Fragment>
      <Helmet>
        <title>{basics.name}</title>
        <meta name="description" content={`resume for ${basics.name}`} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
        />
      </Helmet>
      <Header basics={basics} />
      <div id="content" className="container">
        <Contact basics={basics} />
        <About basics={basics} />
        <Profiles profiles={basics.profiles||[]} />
        <Work works={work} />
        <Volunteer volunteers={volunteer} />
        <Education educations={education} />
        <Awards awards={awards} />
        <Publications publications={publications} />
        <Skills skills={skills} />
        <Languages languages={languages} />
        <Interests interests={interests} />
        <References references={references} />
      </div>
    </React.Fragment>
  );
};

export default Resume;
