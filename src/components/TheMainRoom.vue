<script setup>
  import { ref } from 'vue';
  import PortalTeleporter from './PortalTeleporter.vue';
  import '../aframe/physx-force-pushable.js';
  import '../aframe/clickable.js';
  

  defineProps({
    scale: Number,
  });
</script>

<template>
  <a-entity
    gltf-model="#room"
    rotation="0 90 0"
    position="0 0 0"
    scale="3.5 3.5 3.5"
  >
    <a-sky color="#87CEEB"></a-sky>
    <a-entity light="type:  ambient;  color:  #445451"></a-entity>
    <a-light type="directional" light="castShadow:true;" position="1 1 1" intensity="0.5" shadow-camera-automatic="#objects"></a-light>
    <a-entity
    geometry="primitive: plane; height: 100; width: 100"
    position="0 0 0"
    rotation="-90 0 0"
    material="color: #CEAA92"></a-entity>
    
  </a-entity>
  <a-sphere
    position="0 0.6 0"
    id="golfball"
    radius="0.05"
    color="red"
    shadow="cast: true; receive: true"
    physx-body="type: dynamic; mass: 1; linearDamping: 0.5; angularDamping: 0.5"
    physx-material="staticFriction: 1.0; dynamicFriction: 1.0"
    physx-force-pushable
    clickable
      ></a-sphere>
  <a-entity
    gltf-model="#flag"
    position="32 1.8 0"
    scale="1 1 1"
    rotation="0 90 0"></a-entity>
  <a-entity
    gltf-model="#mountain"
    position="43 -2 0"
    scale="0.4 0.4 0.4"
    rotation="0 90 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="38 0 10"
    scale="0.4 0.3 0.4"
    rotation="0 22 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="30 -2 40"
    scale="0.8 1 0.5"
    rotation="0 90 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="1 -2 30"
    scale="0.6 0.5 0.5"
    rotation="0 70 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="-21 -2 30"
    scale="0.9 0.4 0.8"
    rotation="0 10 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="-15 -2 40"
    scale="0.9 1 0.8"
    rotation="0 10 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="-15 -2 40"
    scale="0.9 1 0.8"
    rotation="0 10 0">
  </a-entity>
  <a-entity
    gltf-model="#mountain"
    position="-35 -2 25"
    scale="0.6 0.4 0.4"
    rotation="0 45 0">
  </a-entity>


  <!-- Main room navigation mesh  -->
  <a-entity position="0 0.056 0" visible="false">
  <a-entity
    geometry="primitive: plane; height: 5; width: 63"
    position="13 0 -0.5"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: blue"
    physx-body="type: static"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 20; width: 15"
    position="-12 0 -11.75"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    physx-body="type: static"
  ></a-entity>
  <a-entity
    geometry="primitive: plane; height: 18; width: 25"
    position="-7 0 -27"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: green"
    physx-body="type: static"
    ></a-entity>
  </a-entity>

  <!-- Main room walls -->
  <a-entity position="0 0 0" visible="false">
    <a-entity
      geometry="primitive: plane; height: 5; width: 63"
      position="5 0 1.8"
      rotation="180 0 0"
      material="color: blue"
      physx-body="type: static"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 5; width: 40"
      position="15 0 -1.8"
      rotation="0 0 0"
      material="color: green"
      physx-body="type: static"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 20; width: 15"
      position="-12 0 -11.75"
      rotation="-90 0 0"
      material="color: red"
      physx-body="type: static"
    ></a-entity>
    <a-entity
      geometry="primitive: plane; height: 18; width: 25"
      position="-7 0 -27"
      rotation="-90 0 0"
      material="color: green"
      physx-body="type: static"
    ></a-entity>
    </a-entity>

</template>