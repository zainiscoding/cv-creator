import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const BasicInfoContainer = (props) => {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  const websiteIcon = <FontAwesomeIcon icon={faExternalLinkAlt} />;
  return (
    <div id='basicInfoContainer'>
      <div id='nameContainer'>
        <p>{props.basicInfo.name}</p>
      </div>
      <div id='basicInfoExtraContainer'>
        <div id='emailContainer' className='basicInfoExtraContainerItem'>
          {props.basicInfo.email && <p>{emailIcon}</p>}
          <p>{props.basicInfo.email}</p>
        </div>
        <div id='phoneNumberContainer' className='basicInfoExtraContainerItem'>
          {props.basicInfo.phoneNumber && <p>{phoneIcon}</p>}
          <p>{props.basicInfo.phoneNumber}</p>
        </div>
        <div id='websiteContainer' className='basicInfoExtraContainerItem'>
          {props.basicInfo.website && <p>{websiteIcon}</p>}
          <p>{props.basicInfo.website}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoContainer;
