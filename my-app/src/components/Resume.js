import React from 'react';
import './ModernDeedy.css';

const Resume = () => {
  return (
  <div className="page">
    <div className='content' >
    <div className="ModernDeedy">
    <p
        className="s2"
        style={{
          paddingTop: '4pt',
          paddingLeft: '52pt',
          textIndent: '0pt',
          lineHeight: '29pt',
          textAlign: 'center',
        }}
      >
      First Last
    </p>

    <p className="s4" 
        style={{
          paddingLeft: '52pt',
          textIndent: '0pt',
          lineHeight: '10pt',
          textAlign: 'center',
        }}>
        <span
        style={{
            color: '#2B2B2B',
            fontFamily: 'Tahoma, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            textDecoration: 'underline',
            fontSize: '9pt',
          }}
        >
          someEmail@edu.com
        </span>{' '}
        <span className="s5">| </span>
        1-234-567-890
        <a
          href="https://www.linkedin.com/in/linkedInUsername"
          style={{
            color: 'black',
            fontFamily: '"Times New Roman", serif',
            fontStyle: 'italic',
            fontWeight: 'normal',
            textDecoration: 'none',
            fontSize: '9pt',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          |{' '}
        </a>
        <span
          style={{
            color: '#2B2B2B',
            fontFamily: 'Tahoma, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            textDecoration: 'underline',
            fontSize: '9pt',
          }}
        >
          linkedIn/linkedInUsername
        </span>{' '}
        <a
          href="https://github.com/myGithubName"
          style={{
            color: 'black',
            fontFamily: '"Times New Roman", serif',
            fontStyle: 'italic',
            fontWeight: 'normal',
            textDecoration: 'none',
            fontSize: '9pt',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
        </a>
        <a
          href="https://github.com/myGithubName"
          className="s3"
          target="_blank"
          rel="noopener noreferrer"
        >
          github/myGithubName
        </a>
      </p>
      
    
      <p className="s1">
        WORK EXPERIENCE
      </p>
      <h1 className="s1">
        AMAZON{" "}
        <span className="s7">
          | Software Development Engineer Intern{" "}
        </span>
        <span className="s6">Toronto, ON | May 2020 – Aug 2020</span>
      </h1>
      <ul id="l1">
        <li>
          <p className="s4">
            Designed and implemented a dashboard using React and TypeScript to
            visualize data stored in DynamoDB, decreasing time to understand
            delivery driver work sessions by over 10 times.
          </p>
        </li>
        {/* Add the rest of the content here */}
      </ul>



    </div>
    </div>
  </div>
  );
}

export default Resume;
