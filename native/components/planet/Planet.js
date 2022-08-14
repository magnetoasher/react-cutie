import React from 'react';
import PropTypes from 'prop-types';
import Svg, { G, Path, Use, Defs, Mask } from 'react-native-svg';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

const Planet = ({ size, color, mood, className }) => (
  <Wrapper className={className}>
    <Svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 134 134"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Defs>
        <Path d={paths.shape} id="cutie-planet__shape--path" />
        <Path d={paths.shadow} id="cutie-planet__shadow--path" />
      </Defs>
      <G id="cutie-planet">
        <G id="cutie-planet__body">
          <Mask id="mask-2" fill="#fff">
            <Use
              xlinkHref="#cutie-planet__shape--path"
              href="#cutie-planet__shape--path"
            />
          </Mask>
          <Use
            id="cutie-planet__shape"
            fill={color}
            xlinkHref="#cutie-planet__shape--path"
            href="#cutie-planet__shape--path"
          />
          <Mask id="mask-4" fill="#fff">
            <Use
              xlinkHref="#cutie-planet__shadow--path"
              href="#cutie-planet__shadow--path"
            />
          </Mask>
          <Use
            id="cutie-planet__shadow"
            fill="#000000"
            opacity=".1"
            xlinkHref="#cutie-planet__shadow--path"
            href="#cutie-planet__shadow--path"
          />
        </G>
        <Face
          mood={mood}
          transform="translate(34 57)"
          uniqueId={getUniqueId()}
        />
      </G>
    </Svg>
  </Wrapper>
);

Planet.propTypes = {
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
  color: PropTypes.string
};

Planet.defaultProps = {
  size: 190,
  mood: 'blissful',
  color: '#FCCB7E'
};

export default Planet;
