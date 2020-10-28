import React from 'react';
import BasicInfoContainer from './CvBasicInfoContainer';
import EducationInfoContainer from './CvEducationInfoContainer';
import WorkInfoContainer from './CvWorkInfoContainer';

const DisplayCv = (props) => {
  return (
    <div id='CV'>
      <BasicInfoContainer basicInfo={props.basicInfo} />
      {props.educationInfo.length !== 0 && (
        <EducationInfoContainer educationInfo={props.educationInfo} />
      )}
      {props.workInfo.length !== 0 && (
        <WorkInfoContainer workInfo={props.workInfo} />
      )}
    </div>
  );
};

export default DisplayCv;
