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
        Whenever you see a <strong>{{keyQisForShape == "circle" ? 'circle' : 'square'}},  press 'q'</strong> on your keyboard,
        whenever you see a <strong>{{keyQisForShape == "circle" ? 'square' : 'circle'}},  press 'p'</strong> - regardless of the
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

    <InstructionScreen>
      <p> Let's start with the <strong>training phase</strong> with 10 trials of training!</p>
    </InstructionScreen>

    <template v-for="(trial, i) in trialsTrain">
      <KeypressScreen
        :key="i"
        :keys="{ q: keyQisForShape, p: keyQisForShape == 'circle' ? 'square' : 'circle' }"
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
          <Record :data="{
              trial: i,
              keyQisForShape: keyQisForShape,
              target_object: trial.target_object,
              target_position: trial.target_position,
              phase: 'training'
            }" />
        </template>
      </KeypressScreen>
    </template>

    <InstructionScreen>
      <p> Good job on training. Next, start with the <strong>test phase</strong> with 20 trials whenever you are ready!</p>
    </InstructionScreen>

    <template v-for="(trial, i) in trialsTest">
      <KeypressScreen
        :key="i"
        :keys="{ q: keyQisForShape, p: keyQisForShape == 'circle' ? 'square' : 'circle' }"
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
        <Record :data="{
              trial: i,
              keyQisForShape: keyQisForShape,
              target_object: trial.target_object,
              target_position: trial.target_position,
              phase: 'test'
            }" />
        </template>
      </KeypressScreen>
    </template>


    <PostTestScreen />

    <SubmitResultsScreen />

  </Experiment>
</template>

<script>
import _ from 'lodash';

var keyQisForShape = _.sample(["square", "circle"])

export default {
  name: 'App',

  data() {
    const trialsTrain = _.map(_.range(10), () => _.sample(conditions));
    const trialsTest  = _.map(_.range(20), () => _.sample(conditions));
    return {
      trialsTrain,
      trialsTest,
      keyQisForShape
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
