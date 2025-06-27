import {makeProject} from '@motion-canvas/core';

import title from './scenes/title?scene';
import positioning from './scenes/positioning?scene';
import layout from './scenes/layout?scene';
import camera from './scenes/camera?scene';
import formula from './scenes/formula?scene';
import s1 from './scenes/anujbarve/s1?scene';
import s2 from './scenes/anujbarve/s2?scene';
import s3 from './scenes/anujbarve/s3?scene';
import info from './scenes/anujbarve/info?scene';
import doubts from './scenes/anujbarve/doubts?scene';
import support from './scenes/anujbarve/support?scene';
import closing from './scenes/anujbarve/closing?scene';

import audio from './audio/Lion - Dyalla.mp3'



export default makeProject({
  scenes: [info,s2,doubts,s3,support,s1,closing],
  audio: audio
});
