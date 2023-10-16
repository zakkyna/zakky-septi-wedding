import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BrownSection = () => {
  return (
    <section
      className="brown-fullbg"
      data-aos="fade-up"
      data-aos-duration="1000">
      <div className="keep-scroll" >
        <p className="text-center text-black scroll-text mb-1">
          Keep Scroll
        </p>
        <div className="text-center icon-down">
          <FontAwesomeIcon
            icon={faChevronDown}
            color={'#000000'}
            size={'lg'}
          />
        </div>
      </div>
    </section>
  );
};

export default BrownSection;
