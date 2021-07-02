<template>
  <Experiment>
    <InstructionScreen>
      <p>Thank you for participating in this experiment!</p>
    </InstructionScreen>

    <InstructionScreen>
      <p>
        In this experiment you will be shown two types of geometric figures: a
        square and a circle. On each trial, you will first see a fixation cross
        in the middle of the screen, which prompts you that the next trial is
        about to start. Please center your gaze at the fixation cross at the
        start of each trial. When the fixation cross disappears, exactly one of
        the shapes (square or circle) will be displayed, either on the left or
        right part of your screen.
      </p>
      <p>
        Whenever you see a circle, please press the 'q' key on your keyboard,
        whenever you see a square, please press the 'p' key - regardless of the
        position of the shape.
      </p>
      <p>
        Please try to press the key as soon as possible while also trying to
        make as few errors as you can.
      </p>
      <p>
        Before the actual experiment starts, a practice session will give you
        the possibility to familiarize yourself with the task.
      </p>
    </InstructionScreen>

    <template v-for="(trial, i) in trials">
      <KeypressScreen
        :key="i"
        :keys="{ q: 'square', p: 'circle' }"
        :fixation-time="Math.floor(Math.random() * 1500 + 1200)"
      >
        <template #stimulus>
          <CanvasStage :config="{ width: 800, height: 400 }">
            <CanvasLayer>
              <CanvasCircle
                v-if="trial.target_object === 'circle'"
                :config="{
                  fill: 'lightblue',
                  radius: 50,
                  x: trial.target_position === 'left' ? 50 : 700,
                  y: 200
                }"
              />
              <CanvasRect
                v-if="trial.target_object === 'square'"
                :config="{
                  fill: 'lightblue',
                  width: 100,
                  height: 100,
                  x: trial.target_position === 'left' ? 50 : 700,
                  y: 150
                }"
              />
            </CanvasLayer>
          </CanvasStage>
        </template>
      </KeypressScreen>
    </template>

    <PostTestScreen />

    <DebugResultsScreen />
  </Experiment>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'App',

  data() {
    const trials = _.map(_.range(20), () => _.sample(conditions));
    return {
      trials
    };
  }
};

const conditions = [
  { target_object: 'circle', target_position: 'left' },
  { target_object: 'circle', target_position: 'right' },
  { target_object: 'square', target_position: 'right' },
  { target_object: 'square', target_position: 'left' }
];
</script>
