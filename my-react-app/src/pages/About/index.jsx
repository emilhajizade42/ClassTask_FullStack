import React from 'react';
import Navbar from '../../layouts/Navbar';

function About() {
  const mystyle = { textAlign: 'center', fontSize: '72px', color: 'green' };
  return (
    <div>
      <Navbar />
      <h1 style={mystyle}>
        HI U ARE AT ABOUT
      </h1>
    </div>
  );
}

export default About;
