import { Camera, Circle, Grid, makeScene2D, Rect, Txt } from '@motion-canvas/2d';
import { all, createRef, createSignal } from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const camera = createRef<Camera>();
    const rect = createRef<Rect>();
    const circle = createRef<Circle>();

      const scale = createSignal(1);


    const rect2 = createRef<Rect>();
    const title = createRef<Txt>();
    const description = createRef<Txt>();

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

    view.add(
        <>
            <Camera ref={camera}>
                <Rect
                    ref={rect}
                    fill={'lightseagreen'}
                    size={100}
                    position={[100, -50]}
                />
                <Txt ref={title} text={"DEMOO"} fill={'white'} position={[100,2000]}></Txt>
                <Circle
                    ref={circle}
                    fill={'hotpink'}
                    size={120}
                    position={[-100, 50]}
                />
            </Camera>
        </>,
    );

    yield* camera().centerOn(title(),5);
    yield* camera().centerOn(rect(),2);
});
