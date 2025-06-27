import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, createSignal, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const scale = createSignal(1);
  const camera = createRef<Camera>();
  const title = createRef<Txt>();
  view.add(<Rect width={1920} height={1080} fill={'#000'} />);
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
  

  view.add(<Txt ref={title} fill={"#fff"} text={``} scale={scale()/3}></Txt>)

  yield* title().text(``,2).to(`Your Love & Support ❤️`,2)

  yield* waitFor(2);
});
