import { Camera, Img, Layout, Rect, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, createSignal, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const scale = createSignal(1);
  const camera = createRef<Camera>();
  const title = createRef<Txt>();
  view.add(<Rect width={1920} height={1080} fill={'#fff'} />);
  view.fontFamily(`'JetBrains Mono', monospace`).fontWeight(700).fontSize(256);
  

  view.add(<Txt ref={title} fill={"red"} text={`Here’s to the ones \nwho believed, supported,\nand helped us reach 1000.\nThis is just the beginning. \n🚀❤️`} textAlign={"center"} scale={scale()/3}></Txt>)

  yield* waitFor(2);
  yield* title().text(``,2).to(`Suggestions That Made Us Better`,2)
    yield* waitFor(1);
});
