import {Grid, Latex, makeScene2D, Rect} from '@motion-canvas/2d';
import {createRef, createSignal, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const tex = createRef<Latex>();

      const rect = createRef<Rect>();
  
        const scale = createSignal(1);


      view.add(<Rect ref={rect} height={1080} width={1920} fill={'#000000'} />);
      view.add( <Grid
              width={1920}
              height={1920}
              spacing={() => scale() * 60}
              stroke={'#444'}
              lineWidth={1}
              lineCap="square"
              cache
            />);
  view.add(<Latex ref={tex} tex={['y', '=', '{{a}}{{x^2}}']} fill="white" />);

  yield* waitFor(0.5);
  yield* tex().tex(['y', '=', '{{a}}{{x^2}} + {{bx}}'], 1);
  yield* waitFor(0.5);
  yield* tex().tex(['y', '=', '{{c}} + {{a}}{{x^2}} + {{bx}}'], 1);
  yield* waitFor(0.5);
  yield* tex().tex(['y', '=', '{{a}}{{x^2}} + {{bx}} + {{c}}'], 1);
  yield* waitFor(0.5);
  yield* tex().tex(['y', '=', '{{x^2}}'], 1);
  yield* waitFor(0.5);
  yield* tex().tex(['y', '=', '{{a}}{{x^2}}'], 1);
});