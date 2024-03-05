<script setup>
  import { ref } from 'vue';

  defineProps({
    loaded: Boolean,
  });

  const showOnboarding = ref(true);

  function enterScene() {
    showOnboarding.value = false;
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('a-scene').enterVR();
    }
    let ambianceSound = document.querySelector('[sound]');
    if (ambianceSound.components.sound) {
      ambianceSound.components.sound.playSound();
    }
  }
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>A-Frame + Vite + Vue Boilerplate</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
      <section>
        <h4>Movement modes support</h4>
        <ul>
          <li>
            Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
            control (Drag and drop)
          </li>
          <li>
            Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
            backward + Gaze cursor for click
          </li>
          <li>
            VR Headset – AR/VR walk + Teleport (Grip for grab and laser for
            click) + Gaze cursor for click
          </li>
        </ul>
      </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and animation-mixer</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/supermedium/superframe/tree/master/components/aabb-collider/" target="_blank">superframe aabb-collider</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera" target="_blank">aframe-multi-camera</a>
          </dt><dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt><dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate" target="_blank">simple-navmesh-constraint</a>
          </dt><dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/firework-61d188cefc7a46f6bfb58a8eadaadb16" target="_blank">Firework</a>
          </dt><dd>
            by <a href="https://sketchfab.com/shikoooooooo" target="_blank">Shikoooooooo</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/game-level-scene-low-poly-78ff510e42184ef4866a84998b5aa157" target="_blank">Game Level Scene Low Poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/Karthiknaidu97" target="_blank">Karthiknaidu97</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
          
          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-golf-flag-animated-a6ebddcfff9a4c8a912551530ebfdb45" target="_blank">Low poly Golf Flag Animated</a>
          </dt><dd>
            by <a href="https://sketchfab.com/prorookie123" target="_blank">prorookie123</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>
          
          <dt>
            <a href="https://sketchfab.com/3d-models/fence-low-poly-9ebef509b23c4031a7305caf822834f2" target="_blank">Fence - Low poly</a>
          </dt><dd>
            by <a href="https://sketchfab.com/lightguard" target="_blank">lightguard</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          
          <dt>
            <a href="https://free3d.com/3d-model/golf-club-putter-v01-sg--271408.html" target="_blank">Golf Club Putter v01 SG</a>
          </dt><dd>
            by <a href="https://free3d.com/user/printable_models" target="_blank">printable_models</a>
            under Licence d'utilisation personnelle
          </dd>

          <dt>
            <a href="https://freesound.org/people/AlonnaAllen/sounds/345695/" target="_blank">Vocal Ambience</a>
          </dt><dd>
            by <a href="https://freesound.org/people/AlonnaAllen/" target="_blank">AlonnaAllen</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0 Deed </a>
          </dd>
          
          <dt>
            <a href="https://freesound.org/people/MilanKovanda/sounds/500811/" target="_blank">Fireworks</a>
          </dt><dd>
            by <a href="https://freesound.org/people/MilanKovanda/" target="_blank">MilanKovanda</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0 Deed </a>
          </dd>
          
          <dt>
            <a href="https://freesound.org/people/kvgarlic/sounds/486552/" target="_blank">late Summer Forest September 28th 2019.WAV</a>
          </dt><dd>
            by <a href="https://freesound.org/people/kvgarlic/" target="_blank">kvgarlic</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0 Deed </a>
          </dd>

          <dt>
            <a href="https://freesound.org/people/kvgarlic/sounds/486552/" target="_blank">Hit 2.wav</a>
          </dt><dd>
            by <a href="https://freesound.org/people/goldenpotatobull/" target="_blank">goldenpotatobull</a>
            under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0 Deed </a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 { font-size: 1.5rem }
  a {
    color: #eee;
    text-decoration: none;
  }
  .licences {
    margin: 2rem 0;
    font-size: 1rem;
    text-align: left;
  }
  .licences dt {
    padding-top: 0.75rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  .licences dd {
    margin-left: 0;
    font-size: 0.8rem;
  }

  #onboarding {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    font-family: monospace;
    z-index: 10000;
    overflow: auto;
  }
  #onboarding > * {
    margin: 0 auto;
    max-width: 50rem;
    width: calc(100vw - 10rem);
    text-align: center;
    border-radius: 0.3rem;
    padding: 1rem;
    font-size: 1.3rem;
  }
  #onboarding button {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
</style>#onboarding li {
#onboarding li {
  font-size: 1rem;
  text-align: left;
}
