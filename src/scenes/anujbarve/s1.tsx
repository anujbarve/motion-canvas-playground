import { Camera, Img, Layout, Rect, makeScene2D } from '@motion-canvas/2d';
import { createRef, createSignal } from '@motion-canvas/core';

const RED = '#ff6470';

export default makeScene2D(function* (view) {
  const scale = createSignal(0.8);
  const camera = createRef<Camera>();
  const lastImageRef = createRef<Img>();

  // Image paths
  const imagePaths = [
    './happy/1.png',
    './happy/2.png',
    './happy/3.png',
    './happy/4.png',
    './happy/5.png',
    './happy/6.png',
    './happy/7.png',
    './happy/8.png',
    './happy/9.png',
    './happy/10.png',
    './happy/11.png',
    './happy/12.png',
    './happy/13.png',
    './happy/14.png',
    './happy/15.png',
    './happy/16.png',
    './happy/17.png',
    './happy/18.png',
    './happy/19.png',
    './happy/20.png',
    './happy/21.png',
    './happy/22.png',
    './happy/23.png',
    './happy/24.png',
    './happy/25.png',
    './happy/26.png',
    './happy/27.png',
    './happy/28.png',
    './happy/29.png',
    './happy/30.png',
    './happy/31.png',
    './happy/32.png',
    './happy/33.png',
    './happy/34.png',
    './happy/35.png',
    './happy/36.png',
    './happy/37.png',
    './happy/38.png',
    './happy/39.png',
    './happy/40.png',
    './happy/41.png',
    './happy/42.png',
    './happy/43.png',
    './happy/44.png',
    './happy/45.png',
    './happy/46.png',
    './happy/47.png',
    './happy/48.png',
    './happy/49.png',
    './happy/50.png',
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
    yield* camera().position.y(-3500,0).to(3500,40);
});
