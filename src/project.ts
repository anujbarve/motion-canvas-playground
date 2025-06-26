import {makeProject} from '@motion-canvas/core';

import title from './scenes/title?scene';
import positioning from './scenes/positioning?scene';
import layout from './scenes/layout?scene';
import camera from './scenes/camera?scene';

export default makeProject({
  scenes: [camera],
});
