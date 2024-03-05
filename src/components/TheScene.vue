<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import TheMainRoom from './TheMainRoom.vue';

  defineProps({
    scale: Number,
    overlaySelector: String,
  });

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
  stats
    background="color: black;"
    :webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
    xr-mode-ui="XRMode: xr"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    fog="color:  #a3d0ed;  near:  30;  far:  60;  density:  0"
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="room" src="assets/gameLevel_noFloor.glb"></a-asset-item>
      <a-asset-item id="fence" src="assets/fence.glb"></a-asset-item>
      <a-asset-item id="flag" src="assets/flag.glb"></a-asset-item>
      <a-asset-item id="mountain" src="assets/mountain.glb"></a-asset-item>
      <a-asset-item id="firework" src="assets/firework.glb"></a-asset-item>
      
      <a-asset-item id="sound-ambiant" response-type="arraybuffer" src="assets/ambiant.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound-hit" response-type="arraybuffer" src="assets/hit.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound-win" response-type="arraybuffer" src="assets/win.mp3" preload="auto"></a-asset-item>
      <a-asset-item id="sound-firework" response-type="arraybuffer" src="assets/firework.mp3" preload="auto"></a-asset-item>
      
      <img id="room-texture" :src="`assets/gameLevel.jpg`">
      <img id="teleport" :src="`assets/teleport.png`">
    </a-assets>

    <TheCameraRig />
    <template v-if="allAssetsLoaded">
      <TheMainRoom :scale="scale" />
    </template>


  </a-scene>
</template>