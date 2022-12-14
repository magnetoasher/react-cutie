import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

import Svg, { G, Path, Use, Defs, Mask } from 'react-native-svg';

const SpeechBubble = ({ size, color, mood, className }) => (
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
        <Path d={paths.shape} id="cutie-speechBubble__shape--path" />
        <Path d={paths.shadow} id="cutie-speechBubble__shadow--path" />
      </Defs>
      <G id="Cutie-speechBubble">
        <G id="Cutie-speechBubble__body">
          <Mask fill="#fff">
            <Use
              xlinkHref="#cutie-speechBubble__shape--path"
              href="#cutie-speechBubble__shape--path"
            />
          </Mask>
          <Use
            id="Cutie-speechBubble__shape"
            fill={color}
            xlinkHref="#cutie-speechBubble__shape--path"
            href="#cutie-speechBubble__shape--path"
          />
          <Mask fill="#fff">
            <Use
              xlinkHref="#cutie-speechBubble__shadow--path"
              href="#cutie-speechBubble__shadow--path"
            />
          </Mask>
          <Use
            id="cutie-speechBubble__shadow"
            fill="#000"
            opacity=".1"
            xlinkHref="#cutie-speechBubble__shadow--path"
            href="#cutie-speechBubble__shadow--path"
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

SpeechBubble.propTypes = {
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

SpeechBubble.defaultProps = {
  size: 150,
  mood: 'blissful',
  color: '#83D1FB'
};

export default SpeechBubble;
