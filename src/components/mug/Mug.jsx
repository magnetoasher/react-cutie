import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Mug = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 172 115"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="cutie-mug">
        <g id="cutie-mug__body" fillRule="nonzero">
          <path d={paths.shape} id="cutie-mug__shape" fill={color} />
          <path
            d={paths.shadow}
            id="cutie-mug__shadow"
            fill="#000"
            opacity=".1"
          />
        </g>
        <Face
          mood={mood}
          transform="translate(71 42)"
          uniqueId={getUniqueId()}
        />
      </g>
    </svg>
  </Wrapper>
);

Mug.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
    'excited',
    'ko'
  ]),
  /**
   * Hex color
   */
  color: PropTypes.string
};

Mug.defaultProps = {
  size: 170,
  mood: 'blissful',
  color: '#A6E191'
};

export default Mug;
