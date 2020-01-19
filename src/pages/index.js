import React from 'react';

const Resume = ({ data }) => {
  const resume = data.resumeYaml;
  const { basics } = resume;
  return (
    <React.Fragment>
      <h1>{basics.name}</h1>
      <h2>{basics.email}</h2>
    </React.Fragment>
  );
};

export default Resume;

export const query = graphql`
  query MyQuery {
    resumeYaml {
      basics {
        email
        name
      }
    }
  }
`;
