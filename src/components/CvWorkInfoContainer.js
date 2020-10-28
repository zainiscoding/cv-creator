import React from 'react';
var uniqid = require('uniqid');

const WorkInfoContainer = (props) => {
  return (
    <div id='workInfoContainer'>
      <h2>Work Experience</h2>
      {props.workInfo.map((experience) => {
        return (
          <>
            <div className='entryContainer' key={uniqid()}>
              <div key={uniqid()} className='entry'>
                {experience.map((detail, i) => {
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

export default WorkInfoContainer;
