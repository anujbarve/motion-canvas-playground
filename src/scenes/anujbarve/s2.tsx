import { Camera, Img, Layout, Rect, makeScene2D } from '@motion-canvas/2d';
import { createRef, createSignal } from '@motion-canvas/core';

const RED = '#ff6470';

export default makeScene2D(function* (view) {
  const scale = createSignal(0.8);
  const camera = createRef<Camera>();
  const lastImageRef = createRef<Img>();

  // Image paths
  const imagePaths = [
    './suggestions/1.png',
    './suggestions/2.png',
    './suggestions/3.png',
    './suggestions/4.png',
    './suggestions/5.png',
    './suggestions/6.png',
    './suggestions/7.png',
    './suggestions/8.png',
    './suggestions/9.png',
  ];

  // Background
  view.add(<Rect width={1920} height={1080} fill={'#000'} />);

  // Layout with camera
  view.add(
    <Camera ref={camera}>
      <Layout
        paddingLeft={200}
        layout
        direction="row" // space between columns
        alignItems="center"
        justifyContent="center"
      >
        {/* Column 1 */}
        <Layout layout direction="column" gap={80}>
          {imagePaths.filter((_, i) => i % 2 === 0).map((src, i) => (
            <Img
              key={`left-${i}`}
              src={src}
              radius={20}
              stroke={RED}
              lineWidth={20}
              scale={scale}
              offset={[-1, -1]}
            />
          ))}
        </Layout>

        {/* Column 2 */}
        <Layout layout direction="column" gap={80}>
          {imagePaths.filter((_, i) => i % 2 !== 0).map((src, i, arr) => (
            <Img
              key={`right-${i}`}
              ref={i === arr.length - 1 ? lastImageRef : undefined}
              src={src}
              radius={20}
              stroke={RED}
              lineWidth={20}
              scale={scale}
              offset={[-1, -1]}
            />
          ))}
        </Layout>
      </Layout>
    </Camera>
  );

  // Animate camera to the last image in the right column
    yield* camera().position.y(-500,0).to(500,5);
});
