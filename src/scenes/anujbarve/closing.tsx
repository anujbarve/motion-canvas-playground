import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, createSignal, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const scale = createSignal(1);
  const camera = createRef<Camera>();
  const title = createRef<Txt>();
  view.add(<Rect width={1920} height={1080} fill={'#000'} />);
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
  

  view.add(<Txt ref={title} fill={"#fff"} text={`
This is more than just 1000 subscribers
it's 1000 reasons to keep creating,
to keep learning, and to keep growing.
Thank you for being a part of this journey.
Here’s to everything ahead. 🚀❤️
`} 
textAlign={"center"}
scale={scale()/4}></Txt>)

  yield* waitFor(2);
});
