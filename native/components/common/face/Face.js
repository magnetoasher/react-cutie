import React from 'react';
import PropTypes from 'prop-types';
import { Circle, Ellipse, G, Path, Use, Defs, Mask } from 'react-native-svg';
import paths from './paths';

const Face = ({ mood, uniqueId, ...rest }) => (
  <G id="cutie-face" {...rest}>
    <Defs>
      <Path d={paths.defs} id="cutie-face__path-1" />
    </Defs>
    <G id="cutie-face__mouth" transform="translate(18.000000, 16.000000)">
      {(mood === 'blissful' || mood === 'lovestruck' || mood === 'excited') && (
        <G
          id="cutie-face__mouth__joy"
          transform="translate(0.000000, 1.000000)"
        >
          <Mask id={`cutie-face__mask-2-${uniqueId}`} fill="white">
            <Use xlinkHref="#cutie-face__path-1" href="#cutie-face__path-1" />
          </Mask>
          <Use
            id="Combined-Shape"
            fill="#000000"
            xlinkHref="#cutie-face__path-1"
            href="#cutie-face__path-1"
          />
          <Path
            d={paths.tongue}
            id="cutie-face__tongue"
            fill="#E74144"
            mask={`url(#cutie-face__mask-2-${uniqueId})`}
            transform="translate(15.000000, 11.431885) scale(1, -1)
            translate(-15.000000, -11.431885)"
          />
        </G>
      )}
      {mood === 'happy' && (
        <Path d={paths.happy} id="cutie-face__mouth__happy" fill="#000000" />
      )}
      {mood === 'shocked' && (
        <Ellipse
          id="cutie-face__mouth__shocked"
          cx="15"
          cy="14"
          rx="9"
          ry="10"
          fill="#000000"
        />
      )}
      {(mood === 'sad' || mood === 'ko') && (
        <Path
          d={paths.sad}
          id="cutie-face__mouth__sad"
          fill="#000000"
          transform="translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
        />
      )}
    </G>
    <G
      id="cutie-face__blush"
      transform="translate(0.000000, 15.000000)"
      fill="#000000"
      opacity="0.2"
    >
      <Circle cx="3" cy="3" r="3" />
      <Circle cx="63" cy="3" r="3" />
    </G>
    <G
      id="cutie-face__eyes"
      transform="translate(2.000000, 0.000000)"
      fill="#000000"
    >
      {mood === 'blissful' && (
        <G
          id="cutie-face__eyes__arc"
          transform="translate(1.000000, 0.000000)"
        >
          <Path d={paths.bliss1} />
          <Path d={paths.bliss2} />
        </G>
      )}
      {(mood === 'happy' ||
        mood === 'sad' ||
        mood === 'shocked' ||
        mood === 'excited') && (
        <G
          id="cutie-face__eyes__circle"
          transform="translate(1.000000, 2.000000)"
        >
          <Circle cx="4.5" cy="4.5" r="4.5" />
          <Circle cx="56.5" cy="4.5" r="4.5" />
        </G>
      )}
      {mood === 'lovestruck' && (
        <G
          id="cutie-face__eyes__heart"
          transform="translate(0.000000, 2.000000)"
          fillRule="nonzero"
        >
          <Path d={paths.lovestruck1} />
          <Path d={paths.lovestruck2} />
        </G>
      )}
      {mood === 'ko' && (
        <G
          id="cutie-face__eyes__ko"
          transform="translate(1.500000, 1.000000)"
          fillRule="nonzero"
        >
          <Path d={paths.ko1} />
          <Path d={paths.ko2} />
        </G>
      )}
    </G>
  </G>
);

Face.propTypes = {
  mood: PropTypes.oneOf([
    'sad',
    'shocked',
    'happy',
    'blissful',
    'lovestruck',
    'excited',
    'ko'
  ])
};

Face.defaultProps = {
  mood: 'blissful'
};

export default Face;
