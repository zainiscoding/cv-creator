import React from 'react';
var uniqid = require('uniqid');

const EducationInfoContainer = (props) => {
  return (
    <div id='educationInfoContainer'>
      <h2>Education</h2>
      {props.educationInfo.map((education) => {
        return (
          <>
            <div className='entryContainer' key={uniqid()}>
              <div key={uniqid()} className='entry'>
                {education.map((detail, i) => {
                  if (detail.charAt(detail.length - 1) !== '') {
                    if (i === 0) {
                      return (
                        <div className='entryTitle'>
                          <p key={i}>{detail}</p>
                        </div>
                      );
                    } else if (i === 1) {
                      return (
                        <div className='entryPlaceName'>
                          <p key={i}>{detail}</p>
                        </div>
                      );
                    } else if (i === 2 || i === 3) {
                      return (
                        <div className='entryDate'>
                          <p key={i}>{detail}</p>
                        </div>
                      );
                    }
                  }
                  return '';
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default EducationInfoContainer;
